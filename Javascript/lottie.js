document.addEventListener('DOMContentLoaded', function () {
    const animationContainer = document.getElementById('lottie-container');
    const animationData = {
      container: animationContainer,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'https://lottie.host/561a8bd8-5121-4098-9797-34f93de99dec/NcPDppc4SB.json',
    };
    const anim = lottie.loadAnimation(animationData);
  
    setTimeout(function () {
      animationContainer.style.display = 'none';
    }, 5000);
  });
  