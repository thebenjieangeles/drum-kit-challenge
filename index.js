let buttons = document.querySelectorAll("button");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    alert("I got clicked!");
  });
});
