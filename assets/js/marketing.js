
// when sms is selected the input with file type displays none
const select = document.querySelector(".select");
  const input = document.querySelector("#file");
    select.addEventListener("change",  () => {
      if (select.value === "1") {
        input.style.display = "block";
      } else if (select.value === "2") {
        input.style.display = "none";
      }
    });