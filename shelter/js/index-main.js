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
        togglePopupWindow();
        // mainBurgerMenu.classList.remove('rotated');
        // mainNavlist.classList.remove('active');
        // mainBody.classList.remove('modal-open');
        // mainOverlaydark.classList.toggle('overlay-on');
        location.href = "index.html#contacts";
    }

});

const helpus_link = document.getElementById('helpus_link');

helpus_link.addEventListener('click', (event) => {
    console.log(event);
    if (mainNavlist.classList.contains('active')) {
        togglePopupWindow();
        // mainBurgerMenu.classList.remove('rotated');
        // mainNavlist.classList.remove('active');
        // mainBody.classList.remove('modal-open');
        // mainOverlaydark.classList.toggle('overlay-on');
        location.href = "index.html#helpus";
    }

});
window.addEventListener('click', function (e) {
    if (mainNavlist.classList.contains('active') && !document.getElementById('navlist').contains(e.target) &&
        !document.getElementById('burgermenu').contains(e.target)) {
        togglePopupWindow();
    }
});

function togglePopupWindow() {
    mainBurgerMenu.classList.toggle('rotated');
    mainNavlist.classList.toggle('active');
    mainBody.classList.toggle('modal-open');
    mainOverlaydark.classList.toggle('overlay-on');
}



// let pets = fetch('../../resources/pets.json')
//     .then(response => response.json())
//     .then(data => console.log("data" + data.name))
//     .catch(error => {
//         console.error('Error:', error);
//     });

// let pets = Array.fromAsync(fetch('../../resources/pets.json')
//     .then(response => response.json())
//     // .then(data => console.log("data" + data.name))
//     .catch(error => {
//         console.error('Error:', error);
//     }));
let pets = [
    {
        "name": "Jennifer",
        "img": "../../images/pets-jennifer.png",
        "type": "Dog",
        "breed": "Labrador",
        "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        "age": "2 months",
        "inoculations": ["none"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Sophia",
        "img": "../../images/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "../../images/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "../../images/pets-scarlett.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "../../images/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "../../images/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "../../images/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "../../images/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

// console.log("pets " + pets[0].name);
// console.log("pet " + pets[0]);

// import pets from '../../resources/pets.json';
// console.log("petS " + pets[0]);

// let pets = ""
// function createCard(i, cardId) {
//     const elementPicture = new Image();
//     elementPicture.src = pets[i].img;
//     elementPicture.alt = pets[i].name;
//     document.getElementById(cardId).appendChild(elementPicture);


//     const elementNickname = document.createElement("div");
//     elementNickname.classList.add("nickname");
//     elementNickname.textContent = pets[i].name;
//     console.log(document.getElementById(cardId) + "to be created")
//     document.getElementById(cardId).appendChild(elementNickname);

//     const elementButton = document.createElement("button");
//     elementButton.classList.add("button-section");
//     elementButton.textContent = "Learn more";
//     document.getElementById(cardId).appendChild(elementButton);

// }

// const elementPicture = new Image();
// elementPicture.src = `../../images/pets-katrine.png`;
// elementPicture.alt = "New Katrine Picture"
// document.getElementById("created").appendChild(elementPicture);


// const elementNickname = document.createElement("div");
// elementNickname.classList.add("nickname");
// elementNickname.textContent = "Katrine Created";
// console.log(document.getElementById("created") + "to be created")
// document.getElementById("created").appendChild(elementNickname);

// const elementButton = document.createElement("button");
// elementButton.classList.add("button-section");
// elementButton.textContent = "Learn more";
// document.getElementById("created").appendChild(elementButton);




// let currentCards = [];
// let leftCards = [];
// let rightcards = [];

// let randomNumber = Math.floor(Math.random() * 8);

// const slider = document.querySelector('.slider-wrapper');
// const sliderImages = document.querySelectorAll('.card');
const SLIDER_LINE = document.querySelector('.slider_line');
// console.log(sliderLine.offsetWidth + "width");

const sliderBtnNext = document.querySelector('.arrow-right');
const sliderBtnPrev = document.querySelector('.arrow-left');


// let silderWidth = slider.offsetWidth;

// console.log(silderWidth + "slider width");

// console.log("css slider wrapper width");
// sliderLine.style.transform = `translateX(${-silderWidth}px)`;
// console.log(`translateX(${silderWidth}px)` + " sdvig");

let sliderCount = 1;
let rightCount = 0;
let leftCount = 0;

sliderBtnNext.addEventListener('click', rightSlide);

function rightSlide() {
    leftCount = 0;
    SLIDER_LINE.classList.add("transition-right");
    sliderCount++;
}

// if (!rightcards.length > 0) {
//     for (let j = 0; j < rightcards.length; j++) {
//         let generatedCardNumber = currentCards[0];
//         while (currentCards.includes(generatedCardNumber)) {
//             generatedCardNumber = randomNumber;
//         }
//         rightcards[j] = generatedCardNumber;
//     }
// }


// console.log(sliderCount);
// console.log(`translateX(${silderWidth}px)` + " sdvig");
// rollSlider();

// if (sliderCount >= sliderImages.length / 3) {
//     sliderCount = 0;
// }

sliderBtnPrev.addEventListener('click', leftSlide);

function leftSlide() {
    sliderCount--;
    SLIDER_LINE.classList.add("transition-left");
    console.log("class added");
}

SLIDER_LINE.addEventListener('animationend', removeTransitionLeft);

function removeTransitionLeft() {

    SLIDER_LINE.classList.remove("transition-left");
    console.log("animation end");
}
// console.log(sliderCount);
// console.log(`translateX(${silderWidth}px)` + " sdvig");

// rollSlider();
// if (sliderCount < 0) {
//     sliderCount = (sliderImages.length) / 3 - 1;
// }

// function rollSlider() {
//     sliderLine.style.transform = `translateX(${-sliderCount * silderWidth}px)`;
// }

