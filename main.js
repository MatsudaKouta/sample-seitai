"use strict";
{
  // header ハンバーガーメニュー
  const hmenu = document.getElementById("h-menu");
  const close = document.getElementById("close");
  const sp = document.querySelector(".sp-nav");
  const as = sp.querySelectorAll("a");

  hmenu.addEventListener("click", () => {
    close.classList.remove("sp-close");
    close.classList.add("sp-menu");

    as.forEach((a) => {
      a.addEventListener("click", () => {
        close.classList.add("sp-close");
      });
    });
  });
}