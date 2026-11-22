// Add play button click functionality
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

// Add about button click functionality
document.addEventListener("DOMContentLoaded", () => {
    const profileButton = document.querySelector(".profile-button");

    if (!profileButton) {
      console.error('No element found with class "profile-button".');
      return;
    }

    profileButton.addEventListener("click", () => {
      window.location.href = "./pages/profile.html";
    });
  });