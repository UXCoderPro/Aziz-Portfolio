// navbar scroll background function
const navBar = document.getElementById('navbar');

window.addEventListener('scroll', () => {

    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});
 

// Side Menu

const icon = document.getElementById('icon');
const sideMenu = document.getElementById('sidemenu');
const overlay = document.getElementById('overlay');
const close = document.getElementById('close');

icon.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    overlay.classList.toggle('active');
    document.body.classList.add("side-open");
});

overlay.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
    document.body.classList.remove("side-open");
});

close.addEventListener('click', () => {
    sideMenu.classList.remove('open');
    overlay.classList.remove('active');
});


// parallax-image

// const parallaxImage = document.getElementById('parallaxImage');
// const secondSection = document.querySelector('#second');

// window.addEventListener('scroll', () => {

//     const scrollY = window.scrollY;
//     const secondSectionTop = secondSection.offsetTop;

//     if (scrollY > secondSectionTop - window.innerHeight / 2){

//         parallaxImage.style.transform = 'translate(-50%, calc(${scrollY - secondSectionTop}px + 50%))';
//         parallaxImage.style.right = '50%';
//         parallaxImage.style.top = '50%';
//         parallaxImage.style.left = '50%';
//         parallaxImage.style.bottom = '50%';
//     } else {
//         parallaxImage.style.transform = 'translate(0, 0)';
//         parallaxImage.style.right = '-100px';
//         parallaxImage.style.top = '0';
//     }

// });

const parallaxImage = document.getElementById('parallaxImage');
const secondSection = document.querySelector('.second');
const mainSection = document.getElementById('main');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY; // Current scroll position
    const secondSectionTop = secondSection.offsetTop; // Top of the second section
    const secondSectionBottom = secondSectionTop + secondSection.offsetHeight;
    const mainSectionBottom = mainSection.offsetTop + mainSection.offsetHeight;

    if (scrollY >= secondSectionTop && scrollY < secondSectionBottom) {
        
        parallaxImage.classList.add('animate');
        parallaxImage.classList.remove('reset', 'hidden');

    } else if (scrollY >= secondSectionBottom) {
        
        parallaxImage.classList.add('hidden');
        parallaxImage.classList.remove('animate');

    } else if (scrollY < mainSectionBottom){

        parallaxImage.classList.add('reset');
        parallaxImage.classList.remove('animate', 'hidden');

    }
});

// resume download

function viewAndDownloadResume() {
    const viewUrl = 'https://drive.google.com/file/d/1OREiAgBMfuDaIn54CArz5oc8YiO0VB4S/view?usp=sharing';
    const resumeUrl = 'https://drive.google.com/uc?export=download&id=1OREiAgBMfuDaIn54CArz5oc8YiO0VB4S';

    

    window.open(viewUrl, '_blank');

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Abdul_Aziz_VI_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// scroll effect

document.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY; // Get the vertical scroll position
    const rotation = scrollPosition / 5; // Adjust the divisor to control rotation speed
    
    const svgElement = document.getElementById("rotate");
    svgElement.style.transform = `rotate(${rotation}deg)`; // Apply rotation
});


// thirdsection star

document.addEventListener("DOMContentLoaded", () => {
    const starSections = document.querySelectorAll(".stars-container");
    const starCount = 50; // Adjust the number of stars

    // Function to generate random positions and timings for stars
    function createStars(container) {
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement("div");
            star.classList.add("star");

            // Randomize star position
            const xPos = Math.random() * 100; // Percentage of container width
            const yPos = Math.random() * 100; // Percentage of container height

            // Apply position
            star.style.left = `${xPos}%`;
            star.style.top = `${yPos}%`;

            // Randomize animation delay for twinkle effect
            const delay = Math.random() * 5; // 0 to 5 seconds
            star.style.animationDelay = `${delay}s`;

            // Add star to the container
            container.appendChild(star);
        }
    }

    // Create stars for each section
    starSections.forEach((container) => createStars(container));
});

// skill animation

document.addEventListener("DOMContentLoaded", () => {
    const rows = document.querySelectorAll(".tools");

    rows.forEach((row) => {
        // Clone the content to create a seamless loop
        const items = Array.from(row.children);
        items.forEach((item) => {
            const clone = item.cloneNode(true);
            row.appendChild(clone);
        });
    });
});





// product 1 side menu

// Get the side menu, overlay, and buttons
const sideMenuu = document.getElementById("project1-side");
const overlayy = document.getElementById("overlay-pro");
const viewMoreBtn = document.getElementById("project1");

// Function to open the side menu
function openSideMenu() {
    sideMenuu.classList.add("open");
    overlayy.classList.add("visible");
    
     // Prevent background scrolling while preserving the current position
     const scrollY = window.scrollY;
     document.body.style.position = 'fixed';
     document.body.style.top = `-${scrollY}px`;
     document.body.dataset.scrollY = scrollY; // Save the scroll position
}

// Function to close the side menu
function closeSideMenu() {
    sideMenuu.classList.remove("open");
    overlayy.classList.remove("visible");
    
    // Restore background scrolling
    const scrollY = parseInt(document.body.dataset.scrollY || '0', 10);
    document.body.style.position = '';
    document.body.style.top = '';
    window.scrollTo(0, scrollY); // Restore the scroll position
    delete document.body.dataset.scrollY; // Remove stored position
}

// Open the menu when the "View More" button is clicked
viewMoreBtn.addEventListener("click", openSideMenu);


// Close the menu when the overlay is clicked
overlayy.addEventListener("click", closeSideMenu);


