//chek if there`s local storage color option 
let mainColor = localStorage.getItem("color_option");

if (mainColor != null ) { 
    document.documentElement.style.setProperty('--main-color', mainColor);

    // remove class active  from all colors list item
    document.querySelectorAll(".list-color li").forEach(element => {

        element.classList.remove("active");

        if (element.dataset.color === mainColor ) {
            // add active class
            element.classList.add("active");
        }
    })
};

// ***********************************************************************************

// toggle spin class icon
document.querySelector(".toggle-setting i").onclick = function () {

//toggle class fa-spin for rotation self
    this.classList.toggle("fa-spin");

// toggle class open on main setting bax
    document.querySelector(".setting-box").classList.toggle("open")
}

// *****************************************************************


// switch colors
const colorLi = document.querySelectorAll(".list-color li");

//loop on all list items 
colorLi.forEach(li => {
     
    //click on every list item 
    li.addEventListener("click", (e) => {
        
        //set color on root 
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

        // set color on local storage
        localStorage.setItem("color_option", e.target.dataset.color)

        handleActive(e);
    });
})

// ************************************************************************************

// switch rondom background
const rondomBackground = document.querySelectorAll(".rondom-background span");

//loop on all span 
rondomBackground.forEach(span => {
     
    //click on every span 
    span.addEventListener("click", (e) => {

        handleActive(e)
        });
})

// **********************************************************************************

// select landing page element
let landingPage = document.querySelector(".lading-page");

// get array of images
let imgArray = ["card-1.jpeg", "001.jpg", "img-2.jpg", "04.jpg"];


setInterval (() => {
    // get random number
    let randomNumber = Math.floor(Math.random() * imgArray.length);
    // chaing background img url
    landingPage.style.backgroundImage = 'url("img/' + imgArray[randomNumber]+ '")';
},5000);

// ***************************************************************** 

//select sckill
let ourSkills = document.querySelector(".skills");
window.onscroll = function () {

    // skills offset top
    let skillsOffsetTop = ourSkills.offsetTop;

    // skills offset height
    let skillsOuterHeight = ourSkills.offsetHeight;

    // window height
    let windowHeight = this.innerHeight;

    // window scrool top 
    let windowScrollTop = this.pageYOffset;

    if (windowScrollTop > (skillsOffsetTop - skillsOuterHeight)) {

        let allSkills = document.querySelectorAll(".skills-box .skills-progress span");

        allSkills.forEach(e => {
            e.style.width = e.dataset.progress;
        });
    }
}
// **************************************************************************

// create popup with the img
let ourGallery = document.querySelectorAll(".gallery img");

    ourGallery.forEach (img => {

        img.addEventListener("click", (e) => {

            // create overlay element 
            let overlay = document.createElement("div");
        
            // add class to overlay
            overlay.className = "popup-overlay";
        
            // append overlay to the boay 
            document.body.appendChild(overlay);

            // create popup box 
            let popupBox =document.createElement("div");

            // add class to the popup Box
            popupBox.className = "popupBox";

            if (img.alt !== null ) {
                // create heading 
            let imgHeading = document.createElement("h3");

            // create text for heading 
            let imgText = document.createTextNode(img.alt);

            // append the text for Heading
            imgHeading.appendChild(imgText);

            // append the heading to popup box

            popupBox.appendChild(imgHeading);

         }

            // create the img
            let popupImg = document.createElement("img");

            // set img src
            popupImg.src = img.src;

            // add img to popup box 
            popupBox.appendChild(popupImg);

            // append popup box the to body
            document.body.appendChild(popupBox);
         
            // create close button
            // crate span 
            let closeButton = document.createElement("span");

            // create text node 
            let closeButtonText = document.createTextNode("x");

            // append text for span 
            closeButton.appendChild (closeButtonText);

            // add class span
            closeButton.className = "close-Button";

            //append closeButton to for popup box ;
            popupBox.appendChild(closeButton);
        });
    });

    // clase popup
    document.addEventListener("click", (e) => {
        if (e.target.className == 'close-Button') {

            // remove popup
            e.target.parentNode.remove();

            // remove overlay
            document.querySelector(".popup-overlay").remove()
        }
    })

    // ********************************************************

    let allBullets = document.querySelectorAll(".Navigation .Bullets");
// ***************
let allLinksLi = document.querySelectorAll(".links li");
let allLinksA = document.querySelectorAll(".links a");
// ***************
function scrollToSmoew (elements) {

    elements.forEach(element => {

        element.addEventListener("click", (e) => {

            e.preventDefault();

            document.querySelector(e.target.dataset.section).scrollIntoView({
                    behavior: "smooth"
                });

            });
        });
    }
scrollToSmoew(allBullets);
scrollToSmoew(allLinksLi);
scrollToSmoew(allLinksA);

//**************************************************** ***************** */

// handle active state 
function handleActive (ev) {
    // remove active class 
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // add class active
    ev.target.classList.add("active");
}

0//// ********************************************************************

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsNavigation = document.querySelector(".Navigation");

let bulletsLocall = localStorage.getItem("bulltes_option");

if (bulletsLocall !== null) {

    bulletsSpan.forEach(span => {
        span.classList.remove("active");
    });

    if (bulletsLocall === 'block') {

        bulletsNavigation.style.display = "block";

       document.querySelector(".bullets-option .yes").classList.add("active");

    }
    else {

        bulletsNavigation.style.display = "none";

       document.querySelector(".bullets-option .no").classList.add("active");

    }
    

}

bulletsSpan.forEach(span => {

    span.addEventListener ("click" , (e) => {
         
        if(span.dataset.display === "show") { 

            bulletsNavigation.style.display = "block";

            localStorage.setItem("bulltes_option", 'block');
        }
         else {

            bulletsNavigation.style.display = "none";

            localStorage.setItem("bulltes_option", 'none');

        }

        handleActive(e);
    });
});

// reset option 

document.querySelector(".reset-option").onclick = function () {

    // localStorage.clear(); 

    localStorage.removeItem("color_option");
    localStorage.removeItem("bulltes_option");

    // reload window
    window.location.reload();
}

// *********************************************************************************

// toggle menu 

let toggleLinks = document.querySelector(".toggle-links");
let links = document.querySelector(".links");

toggleLinks.onclick = function (e) {

    e.stopPropagation();
    
    // toggle class "menu-active" on button
    this.classList.toggle("toggle-active");

    // toggle class "open" on links
    links.classList.toggle("open");
}

// 
document.addEventListener("click", (e) => {

    if (e.target !== toggleLinks && e.target !== links ) {

        if (links.classList.contains("open")) {
                // toggle class "menu-active" on button
                toggleLinks.classList.toggle("toggle-active");

                // toggle class "open" on links
                links.classList.toggle("open");
        }

    }
})

// stop propagation
links.onclick = function (e) {
    e.stopPropagation();
}


// code jquery 
$(document).ready(function () {

    $(".icon").click(function () {

        // add opacity(0) to for span tow 
        $("span.tow").toggleClass('opacitySpan');

        // add rotate (40deg) to for span one
        $("span.one").toggleClass("rotateSpan1");

        // add rotate (140deg) to for span there
        $("span.there").toggleClass("rotateSpan3");
    });
// ############################################################

    $(window).scroll (function () {
        
    })
})