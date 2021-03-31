const urlList = 'https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518&page=2';

const getMore = () => {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', urlList, true);
    xhr.responseType = 'json';
    xhr.onload = function () {
      var status = xhr.status;
      if (status === 200) {
        resolve(xhr.response);
      } else {
        reject(status);
      }
    };
    xhr.send();
  });
}

export default getMore;
