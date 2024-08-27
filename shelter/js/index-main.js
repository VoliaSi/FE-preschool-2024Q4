console.log("hello");

const mainBurgerMenu = document.getElementById('burgermenu');
const mainNavlist = document.getElementById('navlist');
const mainOverlaydark = document.getElementById('overlaydark');

const mainBody = document.body;

console.log(mainOverlaydark);
console.log(mainOverlaydark.tagName);


mainBurgerMenu.addEventListener('click', (event) => {
    console.log(event);
    mainBurgerMenu.classList.toggle('rotated');
    mainNavlist.classList.toggle('active');
    mainBody.classList.toggle('modal-open');
    mainOverlaydark.classList.toggle('overlay-on');
});

mainBurgerMenu.addEventListener('click', (event) => {
    console.log(event);
    if (event.target.classList.contains('active')) {
        mainNavlist.classList.remove('active');
    }

});

const contacts_link = document.getElementById('contacts_link');

contacts_link.addEventListener('click', (event) => {
    console.log(event);
    if (mainNavlist.classList.contains('active')) {
        mainBurgerMenu.classList.remove('rotated');
        mainNavlist.classList.remove('active');
        mainBody.classList.remove('modal-open');
        mainOverlaydark.classList.toggle('overlay-on');
        location.href = "index.html#contacts";
    }

});

const helpus_link = document.getElementById('helpus_link');

helpus_link.addEventListener('click', (event) => {
    console.log(event);
    if (mainNavlist.classList.contains('active')) {
        mainBurgerMenu.classList.remove('rotated');
        mainNavlist.classList.remove('active');
        mainBody.classList.remove('modal-open');
        mainOverlaydark.classList.toggle('overlay-on');
        location.href = "index.html#helpus";
    }

});
window.addEventListener('click', function (e) {
    if (mainNavlist.classList.contains('active') && !document.getElementById('navlist').contains(e.target) &&
        !document.getElementById('burgermenu').contains(e.target)) {
        mainBurgerMenu.classList.toggle('rotated');
        mainNavlist.classList.toggle('active');
        mainBody.classList.toggle('modal-open');
        mainOverlaydark.classList.toggle('overlay-on');
    }
})

