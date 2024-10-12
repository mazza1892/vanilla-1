const mobileNavButton = document.getElementById("side-menu-toggle");
const mainNav = document.getElementsByTagName("nav");

const homeLink = document.getElementById("home-link");
const blogLink = document.getElementById("blog-link");
const contactLink = document.getElementById("contact-link");
const projectLink = document.getElementById("project-link");

function toggleNavStyles() {
    mainNav[0].style.left = "0";
    mainNav[0].style.display = "block";
}

function toggleNavigation() {
    const currentState = mobileNavButton.getAttribute("current-state");

    if (!currentState || currentState === "closed") {
        toggleNavStyles();
        mobileNavButton.setAttribute("current-state", "open");
    } else {
        mainNav[0].style.left = "-70%";
        mobileNavButton.setAttribute("current-state", "closed");
    }
}

function resetActiveNavState() {
    homeLink.classList.remove("active");
    blogLink.classList.remove("active");
    contactLink.classList.remove("active");
    projectLink.classList.remove("active");
}

/* Event Listeners */
mobileNavButton.addEventListener("click", () => {
    toggleNavigation();
});

homeLink.addEventListener("click", () => {
    resetActiveNavState();
    homeLink.classList.add("active");
});

blogLink.addEventListener("click", () => {
    resetActiveNavState();
    blogLink.classList.add("active");
});

contactLink.addEventListener("click", () => {
    resetActiveNavState();
    contactLink.classList.add("active");
});

projectLink.addEventListener("click", () => {
    resetActiveNavState();
    projectLink.classList.add("active");
});
