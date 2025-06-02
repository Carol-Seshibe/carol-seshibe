//Getting dynamic date on footer
let yearElement = null;
let videoIframe = null;
const year = new Date();
const videoApspectRatio = 600/440;

//

window.addEventListener('load', () => {
    yearElement = document.getElementById("currentYear");
    yearElement.innerText = year.getFullYear();
    
    document.getElementById('MenuButton').addEventListener('click', function () {
        document.getElementById('NavMenu').classList.toggle('active');
    });
  resizeVideo();
})
