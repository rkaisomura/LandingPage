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

    

//Add class 'active' to links when they are clicked

//Add class 'active' to links when they are clicked
function myFunction(item, index) {
   if (item.getAttribute("id") == "link0")  {
    item.classList.add("active");
   }
}
  

// List of archors
const ndArchors = document.querySelectorAll('a');

// click event to archor list
document.addEventListener('click', function(event){
    // Search in all archor which element was clicked
    for (var obj of ndArchors.values()) {
        // If archor was clicked set as active
        if (obj.getAttribute("id") == event.toElement.id) {
            obj.classList.add("active");
        } else {
            // otherwise the element should be removed
            obj.classList.remove("active");
        }
      }
})
    
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 




// Animation of the watch and diamond icons
function iconanim(){
    let iconAnimation = document.getElementById('icon-animation');
    iconAnimation.innerHTML = "&#xf017;"; //code of watch icon from font awesome

    setTimeout(function(){
        iconAnimation.innerHTML = "&#xf219;"; //code of diamond icon from font awesome
    }, 1000); 
}

iconanim(); // call the function in order to start the animation
setInterval(iconanim, 2000); //repeat the animation after 2s

// Top button appears when user scroll down more than 500px. Used the tutorial as a reference: https://www.w3schools.com
const topButton = document.getElementById("topBtn");

window.onscroll = function(){
    topbtnAppear()
}

function topbtnAppear(){
    if(window.pageYOffset >= 500){
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// When user click on the Top button, the page goes to the top
function topPage(){
    document.documentElement.scrollTop = 0;
}


