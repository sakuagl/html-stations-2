function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let toggle = document.getElementById("check");
  let taxt = document.getElementById("text");

  if (toggle.checked) {
    taxt.style.backgroundColor = "red";
  } else {
    taxt.style.backgroundColor = "transparent";
  }
}
