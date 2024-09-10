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


function createCard(ind) {
    const cardId = document.createElement("div");
    cardId.classList.add("card");
    const elementPicture = new Image();
    elementPicture.src = pets[ind].img;
    elementPicture.alt = pets[ind].name;
    cardId.appendChild(elementPicture);
    // document.getElementById(cardId).appendChild(elementPicture);


    const elementNickname = document.createElement("div");
    elementNickname.classList.add("nickname");
    elementNickname.textContent = pets[ind].name;
    // console.log(cardId + "to be created");
    cardId.appendChild(elementNickname);
    console.log(elementNickname + pets[ind].name + "was appended");
    // document.getElementById(cardId).appendChild(elementNickname);

    const elementButton = document.createElement("button");
    elementButton.classList.add("button-section");
    elementButton.textContent = "Learn more";
    cardId.appendChild(elementButton);
    // document.getElementById(cardId).appendChild(elementButton);

    return cardId;
}

// let imageIndexes = [0, 1, 2, 3, 4, 5, 6, 7];

// let pages = [];

// for (let i = 0; i < 6; i++) {
//     // pages[i] = imageIndexes.sort(() => Math.random() - 0.5);
//     pages.push(imageIndexes.sort(() => Math.random() - 0.5));
//     console.log("pages [i] " + i + " " + pages[i]);
// }
// for (let j = 1; j < 6; j++) {
//     console.log("byelement " + pages[j]);
// }
// console.log("pages now " + pages);


let numbers = [];
for (let k = 0; k < 6; k++) {
    numbers.push(Array.of(0, 1, 2, 3, 4, 5, 6, 7).sort(() => Math.random() - 0.5));
    console.log("numbers [i] " + k + " " + numbers[k]);
}
console.log(" numbers " + numbers);
console.log(" numbers as array" + numbers);

let currPageNumber = 1;
console.log("numers current" + numbers[currPageNumber - 1]);

const SLIDER = document.querySelector(".slider");

SLIDER.innerHTML = '';

console.log('we will create these cards 6thel' + numbers[currPageNumber - 1][6]);

function createCurrPage(pageNumber) {
    for (let m = 0; m < 8; m++) {
        console.log(" page number " + pageNumber);

        let cardIndexToCreate = numbers[pageNumber - 1][m];
        console.log(m + ' we will create these cards ' + numbers[pageNumber - 1][m]);

        let card = createCard(cardIndexToCreate);

        SLIDER.appendChild(card);
    }

}

createCurrPage(currPageNumber);

const FIRST_PAGE = document.querySelector("#first-page");
const PREV_PAGE = document.querySelector("#prev-page");
const CURR_PAGE = document.querySelector("#curr-page");
const NEXT_PAGE = document.querySelector("#next-page");
const LAST_PAGE = document.querySelector("#last-page");
const NAVV_ERROW = document.querySelectorAll(".arrow");


NAVV_ERROW.forEach((element) => element.addEventListener('click', navigate));


// FIRST_PAGE.addEventListener('click', navigate);

// PREV_PAGE.addEventListener('click', navigate);

// CURR_PAGE.addEventListener('click', navigate);

// NEXT_PAGE.addEventListener('click', navigate);

// LAST_PAGE.addEventListener('click', navigate);


function navigate() {
    let id = event.target.attributes['id'].value;
    if (id === "first-page" || currPageNumber < 1) {
        currPageNumber = 1;
    }
    if (id === "last-page" || currPageNumber > 6) {
        currPageNumber = 6;
    }
    if (id === "prev-page" && currPageNumber > 1) {
        currPageNumber--;
    }
    if (id === "next-page" && currPageNumber < 6) {
        currPageNumber++;
    }
    // alert(currPageNumber);
    // console.log(currPageNumber);

    SLIDER.innerHTML = '';

    createCurrPage(currPageNumber);
    CURR_PAGE.innerHTML = currPageNumber;
    if (currPageNumber === 1) {
        PREV_PAGE.classList.add("notactive-arrow");
    }
    if (currPageNumber === 6) {
        NEXT_PAGE.classList.add("notactive-arrow");
    }




}



