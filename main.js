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

  //問い合わせフォーム
  const patient = document.getElementById("patient");
  const tel = document.getElementById("tel");
  const email = document.getElementById("email");
  const date = document.getElementById("date");
  const time = document.getElementById("time");
  const request = document.getElementById("request");
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", (e) => {
    if (
      patient.value === "" ||
      tel.value === "" ||
      email.value === "" ||
      date.value === "" ||
      time.value === ""
    ) {
      e.preventDefault();
      alert("項目に入力をお願いします");
    } else {
      alert("承りました。一両日中にご返事させていただきます");
      // const content = document.createElement("p");
      // content.textContent = "承りました。一両日中には返信させていただきます。";
      // const contactWrap = document.querySelector(".contact-wrap");
      // contactWrap.appendChild(content);

      // content.classList.add("submitDesign");
    }
  });

  //相談フォーム
  const counsel = document.getElementById("counsel");
  const emailC = document.getElementById("email-c");
  const formC = document.querySelector(".contact-form-c");

  formC.addEventListener("submit", (e) => {
    if (counsel.value === "" || emailC.value === "") {
      e.preventDefault();
      alert("項目に入力をお願いします");
    } else {
      alert("承りました。確認次第ご返事させていただきます");
      // const content = document.createElement("p");
      // content.textContent = "承りました。一両日中には返信させていただきます。";
      // const counselingWrap = document.querySelector(".counseling-wrap");
      // counselingWrap.appendChild(content);

      // content.classList.add("submitDesign");
    }
  });
}
