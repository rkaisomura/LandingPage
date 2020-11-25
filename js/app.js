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

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Build the navigation bar

const textList = ['Rings', 'Earrings', 'Bracelets', 'Watches', 'Shop'];

const listLinks = document.getElementsByTagName('section');        
for (let i=0; i < listLinks.length; i++) {
    const unorderedList = document.querySelector('#navbar__list');
    const listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    const anchorTag = document.createElement('a');
    anchorTag.id = "link";
    anchorTag.setAttribute('href', "#"+listLinks[i].id);
    anchorTag.textContent = textList[i];
    listItem.appendChild(anchorTag);
}

    

// Add class 'active' to links when near of viewport
window.addEventListener('scroll', function(){
    const navLinks = document.querySelectorAll('section');
    const fromTop = window.scrollY;

    navLinks.forEach(function() {
        let section = document.querySelector();

        if () {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// Animation of the watch and diamond icons
function iconanim(){
    let iconAnimation = document.getElementById('icon-animation');
    iconAnimation.innerHTML = "&#xf017;";

    setTimeout(function(){
        iconAnimation.innerHTML = "&#xf219;";
    }, 1000);
}

iconanim();
setInterval(iconanim, 2000);

// Top button appears when user scroll down more than 100px. Used tutorial from: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
const topButton = document.getElementById("topBtn");

window.onscroll = function() {
    scrollPage()
};

function scrollPage(){
    if (document.documentElement.scrollTop > 100){
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When user click on the Top button, the page goes to the top
function topPage(){
    document.documentElement.scrollTop = 0;
}


