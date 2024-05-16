export const promoVideoPlay = function () {
  const videoLinks = document.querySelectorAll('.promo__video-link');
  const videoBoxes = document.querySelectorAll('.video');
  const videoCloseIcon = document.querySelectorAll('.video-close')

  videoLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      videoCloseIcon.forEach((icon) => {
        icon.classList.add("video-close_active")
        icon.addEventListener('click', () => {
          if (icon.classList.contains("video-close_active")) {
            icon.classList.remove("video-close_active");
          }
          videoBoxes.forEach((videoBox) => {
            videoBox.classList.remove("video_active");
          });
        })
      })
      videoBoxes.forEach((videoBox) => {
        videoBox.classList.toggle("video_active");
      })
    })
  })
}