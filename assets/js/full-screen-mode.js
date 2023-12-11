$(document).ready(function () {
  // Add click event listener to toggle fullscreen buttons
  $('#enterFullscreenButton').click(function () {
    const fullscreenContainer = document.getElementById('full-screen');
    if (fullscreenContainer && fullscreenContainer.requestFullscreen) {
      fullscreenContainer.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
      toggleButtons();
    }
  });

  $('#exitFullscreenButton').click(function () {
    exitFullscreen();
  });

  // Listen for the 'Escape' key press
  $(document).on('keyup',function (e) {
    console.log('Escape key pressed');
    if (e.key === 'Escape') {
      exitFullscreen();
      // Switch to Enter Fullscreen button
      $('#enterFullscreenButton').removeClass('hidden');
      $('#exitFullscreenButton').addClass('hidden');
    }
  });

  // Function to exit fullscreen and toggle button visibility
  function exitFullscreen() {
    console.log('Exit fullscreen called');
    if (document.fullscreenElement) {
      // Check if document is currently in fullscreen
      document.exitFullscreen().then(() => {
        toggleButtons();
      }).catch(err => {
        console.error(`Error attempting to exit full-screen mode: ${err.message}`);
      });
    }
  }

  // Function to toggle button visibility
  function toggleButtons() {
    $('#enterFullscreenButton').toggleClass('hidden');
    $('#exitFullscreenButton').toggleClass('hidden');
    $('#full-screen').toggleClass('overflow-y-scroll');
  }
});
