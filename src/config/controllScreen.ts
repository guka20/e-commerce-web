export const controllScreen = () => {
  const animationDiv = document.querySelector(".loading-board");
  animationDiv?.addEventListener("animationend", () => {
    animationDiv.className = "hide";
  });
};
