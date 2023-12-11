const screen = document.getElementById("full-screen");
function openFullscreen() {
  if (screen.requestFullscreen) {
    screen.requestFullscreen();
  } else if (screen.webkitRequestFullscreen) { /* Safari */
    screen.webkitRequestFullscreen();
  } else if (screen.msRequestFullscreen) { /* IE11 */
    screen.msRequestFullscreen();
  }
}