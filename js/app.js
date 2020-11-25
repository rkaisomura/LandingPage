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
const hrefList = ['#hero', '#rings', '#earrings', '#bracelets', '#watches','#shop'];
const textList = ['Home', 'Rings', 'Earrings', 'Bracelets', 'Watches', 'Shop'];

for (let i=0; i < hrefList.length; i++) {
    const unorderedList = document.querySelector('#navbar__list');
    const listItem = document.createElement('li');
    unorderedList.appendChild(listItem);
    const anchorTag = document.createElement('a');
    anchorTag.id = "link";
    anchorTag.setAttribute('href', hrefList[i]);
    anchorTag.textContent = textList[i];
    listItem.appendChild(anchorTag);
}

// Top button appears when user scroll down more than 50px
const topButton = document.getElementById("topBtn");

window.onscroll = function() {
    scrollPage()
};

function scrollPage(){
    if (document.documentElement.scrollTop > 50){
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
// When user click on the Top button, the page goes to the top
function topPage(){
    document.documentElement.scrollTop = 0;
}

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

