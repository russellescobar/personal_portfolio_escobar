
function opentab(tabname) {
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");

    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function openmenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0";
}


function closemenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}