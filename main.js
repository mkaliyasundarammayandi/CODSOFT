document.addEventListener("DOMContentLoaded", function () {
  const inputBox = document.getElementById("inputBox");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.getAttribute("data-value");

      if (buttonText === "AC") {
        inputBox.value = "";
      } else if (buttonText === "=") {
        try {
          inputBox.value = eval(inputBox.value);
        } catch (error) {
          inputBox.value = "Error";
        }
      } else {
        inputBox.value += buttonText;
      }
    });
  });
});
