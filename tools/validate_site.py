from __future__ import annotations

from html.parser import HTMLParser
from pathlib import Path
import re
import sys

ROOT = Path(__file__).resolve().parents[1]
FAILURES: list[str] = []


class Inspector(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.ids: list[str] = []
        self.i18n: list[str] = []
        self.local_assets: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = {key: value or "" for key, value in attrs}
        if values.get("id"):
            self.ids.append(values["id"])
        if values.get("data-i18n"):
            self.i18n.append(values["data-i18n"])
        for attr in ("src", "href"):
            value = values.get(attr, "")
            if value and not value.startswith(("http:", "https:", "mailto:", "#")):
                clean = value.split("?", 1)[0].split("#", 1)[0]
                if clean:
                    self.local_assets.append(clean)


def validate_page(page_name: str, dictionary_name: str) -> None:
    text = (ROOT / page_name).read_text(encoding="utf-8")
    dictionary = (ROOT / dictionary_name).read_text(encoding="utf-8")
    parser = Inspector()
    parser.feed(text)

    duplicate_ids = sorted({item for item in parser.ids if parser.ids.count(item) > 1})
    if duplicate_ids:
        FAILURES.append(f"{page_name}: duplicate ids {duplicate_ids}")

    missing_keys = sorted(
        {key for key in parser.i18n if not re.search(rf"\b{re.escape(key)}\s*:", dictionary)}
    )
    if missing_keys:
        FAILURES.append(f"{page_name}: missing translation keys {missing_keys}")

    for asset in parser.local_assets:
        if not (ROOT / asset).exists():
            FAILURES.append(f"{page_name}: missing local asset {asset}")

    if "assets/favicon.svg" in text:
        FAILURES.append(f"{page_name}: provisional favicon is still referenced")


def main() -> int:
    validate_page("index.html", "script.js")
    validate_page("privacy.html", "legal.js")
    validate_page("terms.html", "legal.js")

    styles = (ROOT / "styles.css").read_text(encoding="utf-8")
    if re.search(r"\.checklist\s+span\s*\{", styles):
        FAILURES.append("styles.css: broad .checklist span selector would collapse translated copy")
    if ".check-icon" not in styles or ".check-copy" not in styles:
        FAILURES.append("styles.css: scoped checklist styles are missing")

    index = (ROOT / "index.html").read_text(encoding="utf-8").lower()
    for term in ("product images", "mockups", "ai listing", "validate", "etsy draft"):
        if term not in index:
            FAILURES.append(f"index.html: AI value proposition missing {term!r}")

    legal = (ROOT / "legal.js").read_text(encoding="utf-8")
    for language in ("en", "it", "es", "fr", "de"):
        if legal.count(f"{language}:") < 3:
            FAILURES.append(f"legal.js: incomplete dictionaries for {language}")

    icon = ROOT / "assets" / "veylto_icon.png"
    if not icon.exists():
        FAILURES.append("official Veylto icon is missing")
    else:
        data = icon.read_bytes()
        if not data.startswith(b"\x89PNG\r\n\x1a\n"):
            FAILURES.append("official Veylto icon does not have a valid PNG signature")
        if len(data) < 5000:
            FAILURES.append("official Veylto icon is unexpectedly small")

    if FAILURES:
        print("Static site validation failed:")
        for failure in FAILURES:
            print(f"- {failure}")
        return 1

    print("Static site validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
