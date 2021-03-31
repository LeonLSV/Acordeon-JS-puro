let btnItems = document.querySelectorAll(".list-item .list-title");

for (let i = 0; i < btnItems.length; i++) {
  btnItems[i].addEventListener("click", function (e) {
    let btn = e.target;

    if (btn.className == "list-title active") {
      removeClass();
    } else {
      removeClass();
      btn.classList.add("active");
    }
  });
}

function removeClass() {
  for (let i = 0; i < btnItems.length; i++) {
    btnItems[i].classList.remove("active");
  }
}
