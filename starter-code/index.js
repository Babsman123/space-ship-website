const menuOpen = document.querySelector(".navigation__menu-open");
const menuClose = document.querySelector(".navigation__menu-close");

const openTextBox = document.querySelector(".header__text-box");
const sliderBox = document.querySelectorAll(".radio__crew-group");
console.log(menuOpen);

menuOpen.addEventListener("click", () => {
  openTextBox.style.opacity = 1;
  openTextBox.style.visibility = "visible";
  menuOpen.style.display = "none";
  menuClose.style.display = "block";
});

menuClose.addEventListener("click", () => {
  openTextBox.style.opacity = 0;
  openTextBox.style.visibility = "hidden";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});

console.log(sliderBox);
// sliderBox[0].addEventListener("click", () => {
//   console.log("Helo");
// });

for (let i = 0; i < sliderBox.length; i++) {
  sliderBox[0].addEventListener("click", () => {
    console.log("Helo");
  });

  sliderBox[1].addEventListener("click", () => {
    console.log("my life");
  });

  sliderBox[2].addEventListener("click", () => {
    console.log("come here");
  });

  sliderBox[3].addEventListener("click", () => {
    console.log("green");
  });
}
