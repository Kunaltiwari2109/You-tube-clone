const menubar = document.querySelector(".menu-icon");
const leftPanel = document.querySelector(".panel-icons");
const content = document.querySelector(".content");
const bigvideo = document.querySelector(".allVideos");

menubar.addEventListener('click', () => {
        leftPanel.classList.toggle("small-left-bar");
        content.classList.toggle("big-content");
        bigvideo.classList.toggle("bigvidcontainer");
})

