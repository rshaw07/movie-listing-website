const API_KEY = 'api_key=b2e3a1c4eb43e3bcc7bb3920e3dc1f27';
const BASE_URL='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL="https://image.tmdb.org/t/p/w500";
const searchURL = BASE_URL + '/search/movie?'+ API_KEY;

searchMovie();
function ans(url){
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    data = data.results;
    console.log(data);
    for(i=0;i<data.length;i++){
        const box1 = `
    <div class="box1"><div class="img"><img src="${IMG_URL + data[i].poster_path}" width="245px"></div>
    <div class="box2"><h3>${data[i].original_title}</h3>
    <div class="overview"><p>${data[i].overview}</p></div>
    <span class="star"><ion-icon id="star" name="star"></ion-icon> (${data[i].vote_average}/10)</span>
    </div>
    </div>`;
    document.querySelector('.final').innerHTML += box1;
    }
});
}
var input = document.getElementById("input");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("one").click();
  }
});
function searchMovie(){
    console.log("button was clicked")
    const searched = document.getElementById("input").value;
    if(searched != 0){
        const url = searchURL + '&query=' + searched;
        ans(url);
    }
    else{
        const url = API_URL;
        ans(url);
    }
    document.querySelector('.final').innerHTML = "";
}