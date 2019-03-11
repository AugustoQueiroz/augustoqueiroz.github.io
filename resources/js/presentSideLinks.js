window.onscroll = function() {shouldPresentSideLinks();};

function shouldPresentSideLinks() {
    var homePageLinks = document.getElementById("link-container");
    var homePageLinksRect = homePageLinks.getBoundingClientRect();
    var sideLinks = document.getElementById("side-links");


    if (homePageLinksRect.bottom < 0) {
        sideLinks.style.right = "10vw";
    } else {
        sideLinks.style.right = "-10vw";
    }
}
