const burgerMenu = document.getElementById('burgermenu');
const navlist = document.getElementById('navlist');
const body = document.body;
console.log(navlist);
burgerMenu.addEventListener('click', (event) => {
    console.log(event);
    burgerMenu.classList.toggle('rotated');
    navlist.classList.toggle('active');
    body.classList.toggle('modal-open');
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
        burgerMenu.classList.remove('rotated');
        navlist.classList.remove('active');
        body.classList.remove('modal-open');
    }
})
const contacts_link = document.getElementById('contacts_link');
contacts_link.addEventListener('click', (event) => {
    console.log(event);
    if (navlist.classList.contains('active')) {
        burgerMenu.classList.toggle('rotated');
        navlist.classList.toggle('active');
        body.classList.remove('modal-open');
        location.href = "index.html#contacts";
    }

});


