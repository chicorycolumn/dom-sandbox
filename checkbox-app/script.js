const activityDisplay = document.getElementById("activity");
const tasksArray = [...document.getElementsByClassName("tasks")];
const badButton = document.getElementById("badButton");
const glitchPunishment = document.getElementById("glitchPunishment");
const erasable = document.getElementById("erasable");

const activities = [
  "go running!",
  "go cycling!",
  "buy groceries!",
  "clean my room!",
  "annex crimea!"
];

activityDisplay.addEventListener("click", event => {
  event.target.innerText = activities[Math.floor((Math.random() * 10) / 2)];
});

tasksArray.forEach(task => {
  task.addEventListener("click", event => {
    let currentBox = event.target.innerText.slice(0, 1);
    switch (currentBox) {
      case "☐":
        tickThatBox(event);
        break;
      case "☑":
        crossThatBox(event);
        break;
      case "☒":
        blankThatBox(event);
        break;
    }
  });
});

badButton.addEventListener("mouseover", event => {
  badButton.innerText = "Fuck off, mate!";
});
badButton.addEventListener("mouseout", event => {
  badButton.innerText = "No";
});
badButton.addEventListener("click", event => {
  glitchPunishment.style.display = "block";
  erasable.style.display = "none";
});

// FUNCTIONS

const tickThatBox = event => {
  event.target.innerText = "☑" + event.target.innerText.slice(1);
  if (tasksArray.every(task => task.innerText.slice(0, 1) === "☑")) {
    setTimeout(function() {
      showFonzie(tasksArray);
    }, 200);
  }
};

const crossThatBox = event => {
  event.target.innerText = "☒" + event.target.innerText.slice(1);
};

const blankThatBox = event => {
  event.target.innerText = "☐" + event.target.innerText.slice(1);
};

const showFonzie = textToBlank => {
  textToBlank.forEach(item => (item.innerText = ""));
  document.getElementById("fonzie").style.display = "block";
};
