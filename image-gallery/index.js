const inputSearchBar = document.getElementById("search_box");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.querySelector(".results");

let access_key = "sEMZUUnC5YVbHLI3Wh4kWccaxhiebv00AVYOnwDkoFc";

let page = 1;
let results_per_page = 12;
let value = "dog";

async function showResults() {
    let pageUrl = `https://api.unsplash.com/search/photos?page=${page}&query=${value}&client_id=${access_key}&per_page=${results_per_page}`;
    // let pageUrl = `https://api.unsplash.com/search/photos/?client_id=${access_key}&query=${value}`;
    // let pageUrl = `https://api.unsplash.com/search/photos/?client_id=sEMZUUnC5YVbHLI3Wh4kWccaxhiebv00AVYOnwDkoFc&query=dog";
    let response = await fetch(pageUrl);
    let data = await response.json();
    let imageUrls = data.results;
    console.log(imageUrls);


    // showResults();

    imageUrls.map((imgurl) => {
        let img = document.createElement("img");
        img.src = imgurl.urls.small;
        let imgLink = document.createElement("a");
        imgLink.href = imgurl.links;
        imgLink.appendChild(img);
        resultDiv.appendChild(img);


    });
}

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showResults();
})