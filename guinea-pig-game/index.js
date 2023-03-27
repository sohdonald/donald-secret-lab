// Your code here
const piggy =
document.getElementById("piggy");

piggy.style.bottom = "0px";

document.addEventListener("keydown",
function (event) {
    console.log(event);
});

//moving left

function movePiggyLeft() {
    const leftNumbers =
    piggy.style.left.replace("px", "");
    const left = parseInt(leftNumbers,10);

    if (left > 0) {
        piggy.style.left = `${left-20}px`;
    }
}

document.addEventListener("keydown",
function (e) {
    if (e.key === "ArrowLeft") {
        movePiggyLeft();
    }
});

//moving right

function movePiggyRight() {
    const rightNumbers =
    piggy.style.left.replace("px", "");
    const right = parseInt(rightNumbers,10);

    if (right < 360) {
        piggy.style.left = `${right+20}px`;
    }
}

document.addEventListener("keydown",
function (e) {
    if (e.key === "ArrowRight") {
        movePiggyRight();
    }
});

//going up

function movePiggyUp() {
    const upNumbers =
    piggy.style.bottom.replace("px", "");
    const up = parseInt(upNumbers,10);

    if (up < 380) {
        piggy.style.bottom = `${up+20}px`;
    }
}

document.addEventListener("keydown",
function (e) {
    if (e.key === "ArrowUp") {
        movePiggyUp();
    }
});

//going down

function movePiggyDown() {
    const downNumbers =
    piggy.style.bottom.replace("px", "");
    const up = parseInt(downNumbers,10);

    if (up > 0) {
        piggy.style.bottom = `${up-20}px`;
    }
}

document.addEventListener("keydown",
function (e) {
    if (e.key === "ArrowDown") {
        movePiggyDown();
    }
});

