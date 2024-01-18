// notification after sending message
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('form');
    var notification = document.getElementById('notification');

    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            console.log('Form submitted');
            showNotification('Message sent! Thank you.');
        });
    }

    function showNotification(message) {
        console.log('Showing notification:', message);
        if (notification) {
            notification.textContent = message;
            fadeIn(notification);
             // Clear input fields
        document.getElementById('update-contact-name').value = '';
        document.getElementById('update-contact-email').value = '';
        document.getElementById('update-contact-msg').value = '';
            setTimeout(function() {
                fadeOut(notification);
            }, 3000);
        }
    }

    function fadeIn(element) {
        element.style.display = 'block';
        var opacity = 0.1;
        var timer = setInterval(function() {
            if (opacity >= 1) {
                clearInterval(timer);
            }
            element.style.opacity = opacity;
            opacity += opacity * 0.1;
        }, 50);
    }

    function fadeOut(element) {
        var opacity = 1;
        var timer = setInterval(function() {
            if (opacity <= 0.1) {
                clearInterval(timer);
                element.style.display = 'none';
            }
            element.style.opacity = opacity;
            opacity -= opacity * 0.1;
        }, 50);
    }
});
