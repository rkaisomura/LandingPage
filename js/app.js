/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// Build the navigation bar
const listLinks = document.getElementsByTagName('section');   

for (let i=0; i < listLinks.length; i++) {
    const unorderedList = document.querySelector('#navbar__list');
    const listItem = document.createElement('li');  //<li> element
    unorderedList.appendChild(listItem); // add 'li' in 'ul'

    const anchorTag = document.createElement('a'); // <a> element
    anchorTag.id = "link"+[i]; //for example: id="link0"
    anchorTag.className = "link"; //class = "link"
    anchorTag.setAttribute('href', "#" + listLinks[i].id); // id attribute from section
    const textList = document.getElementsByTagName('section')[i].attributes[1].nodeValue; // data-nav attribute from section
    anchorTag.textContent = textList; 
    listItem.appendChild(anchorTag); // add 'a' in 'li'
}


//TODO: add class 'active' to links when they are clicked

const ndAnchors = document.querySelectorAll('a'); //List of anchors

// @param event - the clicked event 
document.addEventListener('click', (event) => {    // Click event to anchor list
    // Search in all anchor which element was clicked
    for (let obj of ndAnchors.values()) {
        // If anchor was clicked set as active
        if (obj.getAttribute("id") == event.toElement.id) {
            obj.classList.add("active");
        } else {
            // Otherwise the element should be removed
            obj.classList.remove("active");
        }
    }
})


// Animation of the watch and diamond icons
function iconAnim(){
    let iconAnimation = document.getElementById('icon-animation');
    iconAnimation.innerHTML = "&#xf017;"; //code of watch icon from font awesome

    setTimeout(() => {
        iconAnimation.innerHTML = "&#xf219;"; //code of diamond icon from font awesome
    }, 1000); 
}

iconAnim(); // call the function in order to start the animation
setInterval(iconAnim, 2000); //repeat the animation after 2s


// Top button appears when user scroll down more than 350px and highlight the anchor according to the scrolling section
window.onscroll = function(){
    topbtnAndHighlight();
};

function topbtnAndHighlight(){
    const topButton = document.getElementById("topBtn");
    if (document.documentElement.scrollTop < 350){   // Main header area
        topButton.style.display = "none";
        document.getElementById("link0").className = "link";
    } else if((document.documentElement.scrollTop > 350) && (document.documentElement.scrollTop <= 680)){   // Rings section
        topButton.style.display = "block";
        document.getElementById("rings").className = "movement";
        document.getElementById("link0").className = "link active";
        document.getElementById("link1").className = "link";
    } else if ((document.documentElement.scrollTop >= 900) && (document.documentElement.scrollTop <= 1360)) {  // Earrings section
        topButton.style.display = "block";
        document.getElementById("earrings").className = "movement";
        document.getElementById("link0").className = "link";
        document.getElementById("link1").className = "link active";
        document.getElementById("link2").className = "link";
    } else if((document.documentElement.scrollTop >= 1500) && (document.documentElement.scrollTop <= 2040)){ // Bracelets section
        topButton.style.display = "block";
        document.getElementById("bracelets").className = "movement";
        document.getElementById("link2").className = "link active";
        document.getElementById("link1").className = "link";
        document.getElementById("link3").className = "link";
    } else if((document.documentElement.scrollTop > 2200) && (document.documentElement.scrollTop <= 2720)){ // Watches section
        topButton.style.display = "block";
        document.getElementById("watches").className = "movement";
        document.getElementById("link3").className = "link active";
        document.getElementById("link2").className = "link";
        document.getElementById("link4").className = "link";
    } else if((document.documentElement.scrollTop > 2800) && (document.documentElement.scrollTop <= 3400)){ // Shop section
        topButton.style.display = "block";
        document.getElementById("shop").className = "movement";
        document.getElementById("link4").className = "link active";
        document.getElementById("link3").className = "link";
    }
}

// When user click on the Top button, the page goes to the top
function topPage(){
    document.documentElement.scrollTop = 0;
}