/**
 * Function to create fade-out animations.
 */
function fadeOut() {
  // Move and fade out the button.
  TweenMax.to(".myBtn", 1, {
    y: -100,
    opacity: 0,
  });

  // Move and fade out the screen after a delay.
  TweenMax.to(".screen", 2, {
    y: -400,
    opacity: 0,
    ease: Power2.easeInOut,
    delay: 2,
  });

  // Uncomment the following if you want to animate the '.overlay' class.
  // TweenMax.from('.overlay', 2, {
  //   ease: Power2.easeInOut
  // });

  // Move the first overlay up after a delay.
  TweenMax.to(".overlay", 2, {
    delay: 2.6,
    top: "-150%",
    ease: Expo.easeInOut,
  });

  // Move the second overlay up after a delay.
  TweenMax.to(".overlay-2", 2, {
    delay: 3,
    top: "-150%",
    ease: Expo.easeInOut,
  });

  // Fade in the content after a delay.
  TweenMax.from(".content", 2, {
    delay: 3.2,
    opacity: 0,
    ease: Power2.easeInOut,
  });

  // Move and fade in the content after a delay.
  TweenMax.to(".content", 2, {
    opacity: 1,
    y: "1vh",
    delay: 3.2,
    ease: Power2.easeInOut,
  });

  // Update the z-index of the content to make it visible.
  document.getElementById("content").style.zIndex = "1";
}
