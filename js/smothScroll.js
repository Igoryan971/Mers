const linksHead = document.querySelectorAll(".menu-list__link");
const mainScroll = document.querySelector(".main__scroll");
const newArray = [...linksHead, mainScroll];

newArray.forEach((element) => {
  element.addEventListener("click", (event) => {
    event.preventDefault();
    const id = element.getAttribute("href").substring(1);
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    if (
      burger.classList.contains("humburger-menu-active") &&
      menuElem.classList.contains("menu-active")
    ) {
      toggleMenu();
    }
  });
});
