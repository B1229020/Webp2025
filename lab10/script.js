var imglist_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&api_key=ca370d51a054836007519a00ff4ce59e&per_page=10&format=json&nojsoncallback=1';


function getimg() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', imglist_Url, true);
  xhr.send();
  xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    if (data.stat === "ok") {
      var photoArray = data.photos.photo;
      photoArray.forEach(function(photo) {
        var img_Url = 'https://api.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=ca370d51a054836007519a00ff4ce59e&photo_id=53608779187&format=json&nojsoncallback=1';
        fetchImageSize(img_Url);
      });
    }
  }
}

function fetchImageSize(url) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.send();
  xhr.onload = function() {
    var data = JSON.parse(this.responseText);
    if (data.stat === "ok") {
      var sizes = data.sizes.size;
      var img_url = sizes.find(s => s.label === "Medium" || s.label === "Large")?.source;
      if (img_url) {
        add_new_img(img_url);
      }
    }
  }
}

function add_new_img(img_url) {
  var gal = document.getElementById("gallery");
  var img = document.createElement("img");
  img.setAttribute("src", img_url);
  gal.appendChild(img);
}