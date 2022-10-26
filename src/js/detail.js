

// Get ID from URL
const params = new window.URLSearchParams(window.location.search);
const slug = params.get('slug');
const endpoint = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&slug=" + slug;
const postWrapper = $("#post-wrapper");
const spinner = $("#spinner");

// Custom Functions
$.fn.scrollExecutar = function (pos, seletor, align, compl) {
  if (seletor) {
    var _obj = $(seletor);
    var position = _obj.offset();
    var height = _obj.height();

    if (align == "top") pos = parseFloat(position.top);
    else if (align == "bottom")
      pos = parseFloat(position.top) + parseFloat(height);
    else pos = parseFloat(position.top);
  }

  if (isNaN(pos)) pos = 0;
  if (compl) pos -= compl;

  $("html, body").on(
    "scroll mousedown wheel DOMMouseScroll mousewheel touchmove",
    function () {
      $("html, body").stop();
    }
  );
  $("html, body").animate({ scrollTop: pos }, 1000, function () {
    $("html, body").off(
      "scroll mousedown wheel DOMMouseScroll mousewheel touchmove"
    );
  });
};

$.fn.loadingAtivar = function () {
  spinner.fadeIn("fast");
}

$.fn.loadingDesativar = function () {
  spinner.fadeOut("fast");
}


$.fn.loadPostAjax = function () {

  $.fn.loadingAtivar();

  $.get(
    endpoint,
    function (data) {

      console.log(data);

      $.fn.loadingDesativar();
      var html = "";

      if (data.length > 0) {

        html += `
          <div class="post-header">
            <figure class="box-image-internal">
              <img src="${data[0]._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url}" alt="${data[0].title.rendered}"/>
            </figure>
            <h1 class="post-header__title">${data[0].title.rendered}
            </h1>
          </div>
          <div class="post-body">
          ${data[0].content.rendered}
          </div>
        `;
      }
      else {
        html == "<h2>Nenhum artigo encontrado. Por favor tente novamente mais tarde.</h2>";
      }

      postWrapper.html(html);
    }
  ).fail(
    function () {
      $.fn.loadingDesativar();
      let html = "<h2>Nenhum artigo encontrado. Por favor tente novamente mais tarde.</h2>";
      // articleList.html(html);
    }
  );
}


$(document).ready(function () {

  $.fn.loadPostAjax();

});

$(window).on("load", function () {
  /**
     * Scroll to top of the page
     */
  $.fn.scrollExecutar();
});