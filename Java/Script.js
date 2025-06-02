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
    
    videoIframe = document.querySelector('.EmbeddedVideo > iframe');
    window.addEventListener('resize', resizeVideo);
    resizeVideo();
})

function resizeVideo() {
    const rect = document.body.getClientRects()[0];
    videoIframe.setAttribute('width', rect.width / 2);
    videoIframe.setAttribute('height', rect.width / 2 * videoApspectRatio)
}
