// Public checkout configuration only.
// Paddle client-side tokens and price IDs are designed to be exposed in frontend code.
// NEVER put Paddle API keys or webhook secrets in this repository.
window.VEYLTO_CHECKOUT_CONFIG = Object.freeze({
  enabled: false,
  environment: "sandbox",
  clientToken: "",
  priceId: "",
  productSku: "VEY-LTO",
  backendBaseUrl: "http://localhost:5080"
});
