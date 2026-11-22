document.addEventListener("DOMContentLoaded", () => {
    const playButton = document.querySelector(".play-button");

    if (!playButton) {
      console.error('No element found with class "play-button".');
      return;
    }

    playButton.addEventListener("click", () => {
      window.location.href = "./pages/play.html";
    });
  });