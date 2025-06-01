//Getting dynamic date on footer
const yearElement = document.getElementById("currentYear");
const year = new Date();
yearElement.innerText = year.getFullYear();

//
document.getElementById('MenuButton').addEventListener('click', function () {
    document.getElementById('NavMenu').classList.toggle('active');
});
