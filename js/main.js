// Create The Variable
let toggle = document.getElementsByClassName("toggle");
let changeBtn = document.getElementById("change");
let mailInput = document.getElementById("mail");
let backupCards = document.querySelectorAll(".backup-manager .cards div");
let date = document.querySelectorAll(".date-js");

// Make A Toggle Bttton
for (let i = 0; i < toggle.length; i++) {
  toggle[i].onclick = () => toggle[i].classList.toggle("checked");
}

// Make An Active Button To Change The Email Input
function changeBtnfun() {
  mailInput.removeAttribute("disabled");
  mailInput.style.cssText =
    " cursor: auto; background-color: white; color:black;";
  mailInput.focus();
}

// Clickable Backup Cards
backupCards.forEach(function (backup) {
  backup.addEventListener("click", () => {
    for (let i = 0; i < backupCards.length; i++) {
      backupCards[i].classList.remove("active");
    }
    backup.classList.add("active");
  });
});

// Make A Dynmic Date Variable
let currentDate = new Date();
let currentYear = currentDate.getUTCFullYear();
let currentMonth = currentDate.getUTCMonth() + 1; // Adding 1 to get the month from 1 to 12
let currentDay = currentDate.getUTCDate();

// create a variable to hold the year, month, and day
let currentDateInfo = `${currentDay}/${currentMonth}/${currentYear}`;

date.forEach((date) => {
  console.log(date);
  date.innerHTML = currentDateInfo;
});
