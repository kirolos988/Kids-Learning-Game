$(document).ready(function(){
  $(".numbers").hover(function(){
    $(this).css({"width":"7%" ,"height":"22%"})
  })
})
var animalsData = {
  1: {
    sound: "./assets/sound/num1lion.mp3",
    img: "./assets/image/lion.png",
    counting: "./assets/sound/one.mp3",
    num: "./assets/image/1.png",
  },
  2: {
    sound: "./assets/sound/num2zebra.mp3",
    img: "./assets/image/zebra.png",
    counting: "./assets/sound/two.mp3",
    num: "./assets/image/2.png",
  },
  3: {
    sound: "./assets/sound/num3giraffe.mp3",
    img: "./assets/image/giraffe.png",
    counting: "./assets/sound/three.mp3",
    num: "./assets/image/3.png",
  },
  4: {
    sound: "./assets/sound/num4monkey.mp3",
    img: "./assets/image/monkey.png",
    counting: "./assets/sound/four.mp3",
    num: "./assets/image/4.png",
  },
  5: {
    sound: "./assets/sound/num5tiger.mp3",
    img: "./assets/image/tiger.png",
    counting: "./assets/sound/five.mp3",
    num: "./assets/image/5.png",
  },
  6: {
    sound: "./assets/sound/num6camel.mp3",
    img: "./assets/image/camel.png",
    counting: "./assets/sound/six.mp3",
    num: "./assets/image/6.png",
  },
  7: {
    sound: "./assets/sound/num7elephant.mp3",
    img: "./assets/image/elephant.png",
    counting: "./assets/sound/seven.mp3",
    num: "./assets/image/7.png",
  },
  8: {
    sound: "./assets/sound/num8penguin.mp3",
    img: "./assets/image/penguin.png",
    counting: "./assets/sound/eight.mp3",
    num: "./assets/image/8.png",
  },
  9: {
    sound: "./assets/sound/num9hippo.mp3",
    img: "./assets/image/hippo.png",
    counting: "./assets/sound/nine.mp3",
    num: "./assets/image/9.png",
  },
};
function playMusic() {
  var numbersSoundTrack = document.getElementById("numbersSoundTrack");
  var soundIcon = document.getElementById("soundIcon");
  if (numbersSoundTrack.value == "off") {
    numbersSoundTrack.pause();
    numbersSoundTrack.value = "on";
    soundIcon.src = "./assets/image/audio-2.png";
  } else {
    numbersSoundTrack.play();
    numbersSoundTrack.value = "off";
    soundIcon.src = "./assets/image/audio-speaker-1.png";
  }
}
function goToHome() {
  open("index.html", "_self");
}
function goBack() {
  backIcon.addEventListener("click", function () {
    open("number.html", "_self");
  });
}
function lesson(number) {
  document.getElementById("backIcon").style.display = "inline-block"
  goBack();
  document.getElementById("glowQuiz").style.display = "none"
  var numArr = document.getElementsByClassName("numbers")
  for (var i = 0; i < numArr.length; i++) {
    numArr[i].style.display = "none"
  }
  var numId = number.id
  var selectedImg = document.getElementById("selectedImg")
  selectedImg.setAttribute("src", number.src)
  selectedImg.style.display = "inline-block"
  var imgNum = numId.slice(3)
  var selectedSound = document.getElementById("selectedSound")
  selectedSound.src = animalsData[imgNum].sound
  selectedSound.play()
  var stopNumberSoundTrack = document.getElementById("numbersSoundTrack")
  stopNumberSoundTrack.pause()
  var animalsImgs = document.getElementById("animalsImgs")
  animalsImgs.style.display='inline-block'
  var i = 1
  setInterval(() => {
    if (i <= imgNum) {
      var child = document.createElement("img")
      child.src = animalsData[imgNum].img
      child.style.width = "33.33%"
      child.style.height = "33.33%"
      child.style.margin = "0%"
      child.style.padding = "0%"
      child.style.float = "left"
      animalsImgs.appendChild(child);
      i++;
    }
  }, 1000);
}
function stopEveryThing() {
  var numArr = document.getElementById("numsImgs");
  numArr.style.display = "none";
  var stopNumberSoundTrack = document.getElementById("numbersSoundTrack");
  stopNumberSoundTrack.pause();
  var hideQuiz = document.getElementById("glowQuiz");
  hideQuiz.style.display = "none";
}
function randomnum() {
  for (var i = 0; ; i++) {
    var randomNum = Math.floor(Math.random() * 10);
    if (randomNum > 0) {
      break;
    }
  }
  return randomNum;
}
function randomindex() {
  for (var x = 0; x < 1; x++) {
    var randomIndex = Math.floor(Math.random() * 10);
    if (randomIndex < 1 || randomIndex > 4) {
      x--;
    }
  }
  return randomIndex;
}
function displayAnimalsQuestion(randomNum) {
  var animalsImgs = document.getElementById("animalsImgs");
  animalsImgs.style.display='inline-block'
  var animalNum = randomnum()
  var i = 1;
  setInterval(() => {
    if (i <= randomNum) {
      var child = document.createElement("img");
      child.src = animalsData[animalNum].img;
      child.style.width = "33.33%";
      child.style.height = "33.33%";
      child.style.margin = "0%";
      child.style.padding = "0%";
      child.style.float = "left";
      animalsImgs.appendChild(child);
      i++;
    }
  }, 1000);
  var counted = document.getElementById("selectedSound");
  counted.src = animalsData[randomNum].counting;
  counted.play();
}
function selectRightChoice(randomNum) {
  var rightChoice = document.createElement("img");
  rightChoice.src = animalsData[randomNum].num;
  rightChoice.style.width = "50%";
  rightChoice.style.height = "50%";
  rightChoice.style.margin = "0%";
  rightChoice.style.padding = "0%";
  rightChoice.style.float = "left";
  rightChoice.addEventListener("click", handleRightChoice);
  return rightChoice
}
function createChoices(randomIndex, randomNum) {
  var choicesImgs = document.getElementById("choicesImgs");
  choicesImgs.style.display='inline-block'
  var rightChoice=selectRightChoice(randomNum)
  var randomArr = new Array();
  for (var j = 1; j <= 4; j++) {
    var wrongChoice = document.createElement("img");
    var randomNumImg = Math.floor(Math.random() * 10);
    if (j == randomIndex) {
      randomArr.push(randomNumImg);
      choicesImgs.appendChild(rightChoice)
    }
    else {
      if (randomNumImg == 0 || randomNumImg == randomArr[0] || randomNumImg == randomArr[1] || randomNumImg == randomArr[2] || randomNumImg == randomNum) {
        j--;
      }
      else {
        randomArr.push(randomNumImg);
        wrongChoice.src = animalsData[randomArr[j - 1]].num;
        wrongChoice.style.width = "50%";
        wrongChoice.style.height = "50%";
        wrongChoice.style.margin = "0%";
        wrongChoice.style.padding = "0%";
        wrongChoice.style.float = "left";
        wrongChoice.addEventListener("click", handleWrongChoice);
        choicesImgs.appendChild(wrongChoice);
      }
    }
  }
}
function handleRightChoice() {
  document.getElementById("wrong").style.display = "none";
  document.getElementById("right").style.display = "inline-block";
  var answerSound = document.getElementById("selectedSound");
  answerSound.src = "./assets/sound/clap.mp3";
  answerSound.play();
}
function handleWrongChoice() {
  document.getElementById("right").style.display = "none";
  document.getElementById("wrong").style.display = "inline-block";
  var answerSound = document.getElementById("selectedSound");
  answerSound.src = "./assets/sound/fail.mp3";
  answerSound.play();
}
function reset() {
  var animalsImgs = document.getElementById("animalsImgs");
  animalsImgs.innerHTML = "";
  var choicesImgs = document.getElementById("choicesImgs");
  choicesImgs.innerHTML = "";
  document.getElementById("selectedSound").pause();
  document.getElementById("right").style.display = "none";
  document.getElementById("wrong").style.display = "none";
}
// work with glowing quiz and Next button
function quiz() {
  reset()
  stopEveryThing();
  goBack();
  document.getElementById("next").style.display = "inline-block";
  document.getElementById("backIcon").style.display = "inline-block";
  var randomNum = randomnum();
  var randomIndex = randomindex();
  displayAnimalsQuestion(randomNum);
  createChoices(randomIndex,randomNum)
}
// as same as the above function but work with next button only but you need to remove onclick attribute from html(39)
// $(document).ready(function(){
//   $("#next").click(function(){
//     reset()
//     stopEveryThing();
//     goBack();
//     document.getElementById("next").style.display = "inline-block";
//     document.getElementById("backIcon").style.display = "inline-block";
//     var randomNum = randomnum();
//     var randomIndex = randomindex();
//     displayAnimalsQuestion(randomNum);
//     createChoices(randomIndex,randomNum)
//   })
// })
