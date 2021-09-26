//copywrite: Udemy, Davide Molin
//grab a reference to all enu links 
var $menuLinks = document.querySelectorAll(".menu-item > a");

function displayInfoPanelForElement(event) {
    var $anchor = event.target;
    var $infoPanel = $anchor.parentNode.querySelector(".menu-item-info");
    //make the panel visible!
    //Note: classList is available only on IE10+
    $infoPanel.classList.add("is-visible");
}

function hidenInfoPanelForElement(event) {
    var $anchor = event.target;
    var $infoPanel = $anchor.parentNode.querySelector(".menu-item-info");
    $infoPanel.classList.remove("is-visible");
}

//iterate on the list and register a callback when the user hover the link
for (var i = 0; i < $menuLinks.length; i++) {
    
    //we are on each anchor element in the menu
    //register a callback when the mouse hover on the link
    var $anchor = $menuLinks[i];

    $anchor.addEventListener("mouseover", displayInfoPanelForElement);
    $anchor.addEventListener("mouseout", hidenInfoPanelForElement);
}
