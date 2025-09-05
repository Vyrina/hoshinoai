let aiImage = document.getElementById("aiImage");

aiImage.addEventListener("mousemove", function (e) {
  const sparkle = document.createElement("div");
  sparkle.classList.add("sparkle");
  sparkle.style.left = `${e.offsetX}px`;
  sparkle.style.top = `${e.offsetY}px`;
  aiImage.parentElement.appendChild(sparkle);
  setTimeout(() => {
    sparkle.remove();
  }, 800);
});

const buttons = document.querySelectorAll(".btn-custom");
buttons.forEach(button => {
  button.addEventListener("click", function (e) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");
    ripple.style.left = `${e.clientX - button.offsetLeft}px`;
    ripple.style.top = `${e.clientY - button.offsetTop}px`;
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
});
