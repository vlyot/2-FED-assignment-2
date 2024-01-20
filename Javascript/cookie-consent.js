document.addEventListener('DOMContentLoaded', function () {
  // Get the cookie popup element
  var cookiePopup = document.getElementById('cookie-popup');

  // Check if a session cookie exists
  var cookiesAccepted = document.cookie.replace(/(?:(?:^|.*;\s*)cookiesAccepted\s*=\s*([^;]*).*$)|^.*$/, "$1");

  // If the session cookie is not set or set to 'false', show the cookie popup
  if (cookiesAccepted !== 'true') {
    cookiePopup.style.display = 'block';
  }

  // Add event listeners to the accept and reject buttons
  document.getElementById('accept-btn').addEventListener('click', function () {
    // Set a session cookie to mark acceptance
    document.cookie = "cookiesAccepted=true";
    // Hide the cookie popup
    cookiePopup.style.display = 'none';
  });

  document.getElementById('reject-btn').addEventListener('click', function () {
    // Set a session cookie to mark rejection
    document.cookie = "cookiesAccepted=false";
    // Hide the cookie popup
    cookiePopup.style.display = 'none';
  });
});
