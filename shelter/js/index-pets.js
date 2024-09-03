const burgerMenu = document.getElementById('burgermenu');
const navlist = document.getElementById('navlist');
const body = document.body;
const overlaydark = document.getElementById('overlaydark');
console.log(navlist);
burgerMenu.addEventListener('click', (event) => {
    console.log(event);
    togglePopUpWindow()
    // burgerMenu.classList.toggle('rotated');
    // navlist.classList.toggle('active');
    // body.classList.toggle('modal-open');
    // overlaydark.classList.toggle('overlay-toggled');
});
burgerMenu.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.classList.contains('active')) {
        navlist.classList.remove('active');
    }

});
window.addEventListener('click', function (e) {
    if (navlist.classList.contains('active') && !document.getElementById('navlist').contains(e.target) &&
        !document.getElementById('burgermenu').contains(e.target)) {
        togglePopUpWindow()
        // burgerMenu.classList.remove('rotated');
        // navlist.classList.remove('active');
        // body.classList.remove('modal-open');
        // overlaydark.classList.toggle('overlay-toggled');
    }
})
const contacts_link = document.getElementById('contacts_link');
contacts_link.addEventListener('click', (event) => {
    console.log(event);
    if (navlist.classList.contains('active')) {
        togglePopUpWindow();
        location.href = "index.html#contacts";
    }

});


function togglePopUpWindow() {
    burgerMenu.classList.toggle('rotated');
    navlist.classList.toggle('active');
    body.classList.remove('modal-open');
    overlaydark.classList.toggle('overlay-toggled');
}

