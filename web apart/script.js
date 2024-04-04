const body = document.querySelector("body");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "fas fa-heart";
    heart.style.left = (Math.random() * 90) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
    body.appendChild(heart);
}

setInterval(function() {
    var heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 100) {
        heartArr[0].remove();
    }
}, 100);

function nonDiv() {
    document.getElementById('Content').style = "opacity:0;visibility:hidden;margin-top:30vh;";
}

function showDiv() {
    document.getElementById('Content').style = "opacity:1;margin-top:4vh;animation:kont 3s infinite;";
}

function otomatis() {
    document.getElementById('Content').style.display = "none";
    setTimeout(showDiv, 1200);
}

function showAkhir() {
    setInterval(createHeart, 200);
    document.getElementById('Content').style.display = "none";
}

function mulaiakhir() {
    nonDiv();
    setTimeout(showAkhir, 1400);
}
