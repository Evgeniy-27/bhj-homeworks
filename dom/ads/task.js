const rotator = document.querySelector('.rotator');
const rotatorCases = rotator.children;
let rotatorNumber = 0;

function switchRotator() {
    rotatorCases[rotatorNumber].classList.remove("rotator__case_active");
    rotatorNumber++;
    if (rotatorNumber === rotatorCases.length) {
        rotatorNumber = 0;
    }
    rotatorCases[rotatorNumber].classList.add("rotator__case_active");
    //console.log(rotatorNumber)
};

timer = setInterval(switchRotator, 1000);