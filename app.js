//544d2cda2a4d4a559f95822e972d87be-apikey

let source = 'bbc-news';
let apiKey = "544d2cda2a4d4a559f95822e972d87be";
let main = document.getElementById('main');

function getData() {
  fetch(`https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`)
    .then((apidata) => {
      return apidata.json();
    })
    .then((actual) => {
      console.log(actual);
      for (var i = 0; i < actual.articles.length; i++) {
        document.getElementById('main').innerHTML += 
        `<div class="col-12 col-sm-4  mb-4">
          <div class="card text-info "  style="width: 18rem;">
            <img class="card-img-top" src=${actual.articles[i].urlToImage} alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title">${actual.articles[i].author}</h5>
              <p class="card-text">${actual.articles[i].title}</p>
              <a href=${actual.articles[i].url} target="_blank" class="btn btn-info">Read more</a>
            </div>
          </div>
        </div>`
      }
    })
    .catch((error) => {
      console.log(error);
    })
}

getData();



