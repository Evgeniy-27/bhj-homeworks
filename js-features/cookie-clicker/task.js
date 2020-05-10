
const counterClicks = document.getElementById("clicker__counter");
const changeImg = document.getElementById("cookie");

changeImg.onclick = function () {

    counterClicks.textContent++;
  
    if (changeImg.width === 200) {
        changeImg.width += 30;
    } else {
        changeImg.width -= 30;
    }

}