// Google Analytics tracking code (replace with actual ID)
window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "GA_MEASUREMENT_ID");

// Form submission handler
document.addEventListener("DOMContentLoaded", function () {
  const appointmentForm = document.querySelector("form");
  if (appointmentForm) {
    appointmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const data = Object.fromEntries(formData);

      // In a real app, you would send this to your backend
      console.log("Appointment request:", data);

      // Show success message
      alert(
        "Thank you! Your appointment request has been submitted. We will contact you shortly to confirm."
      );
      this.reset();
    });
  }

  // Service worker registration for PWA
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then(
        (registration) => {
          console.log("ServiceWorker registration successful");
        },
        (err) => {
          console.log("ServiceWorker registration failed: ", err);
        }
      );
    });
  }
});
