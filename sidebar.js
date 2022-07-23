function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

let menuIconCounter = 0;
function animMenuIcon(x) {
    if (menuIconCounter % 2 == 0) {
        x.classList.toggle("change");
    }
    else {
        x.classList.toggle("revert");
    }
}