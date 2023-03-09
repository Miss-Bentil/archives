// This code makes +233 with a placeholder appear on focus
const phoneInput = document.getElementById("phone-input");

phoneInput.addEventListener("click", () => {
  phoneInput.value = "+233 ";
  //    phoneInput.placeholder = "20 458 9375";
  //    console.log(phoneInput.placeholder);
});

// this code generates the current date in the date input field
const dateInput = document.getElementById("date-input");

dateInput.addEventListener("click", () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  dateInput.value = formattedDate;
});


// const dateInputTwo = document.getElementById("date-input-two");

// dateInputTwo.addEventListener("click", () => {
//   const currentDate = new Date();
//   const year = currentDate.getFullYear();
//   const month = String(currentDate.getMonth() + 1).padStart(2, "0");
//   const day = String(currentDate.getDate()).padStart(2, "0");
//   const formattedDate = `${year}-${month}-${day}`;
//   dateInput.value = formattedDate;
// });








// const dateInput = document.querySelectorAll("date-input");

// dateInput.forEach((dateInput) => {
//   dateInput.addEventListener("click", () => {
//     const currentDate = new Date();
//     const year = currentDate.getFullYear();
//     const month = String(currentDate.getMonth() + 1).padStart(2, "0");
//     const day = String(currentDate.getDate()).padStart(2, "0");
//     const formattedDate = `${year}-${month}-${day}`;
//     dateInput.value = formattedDate;
//   });
// });