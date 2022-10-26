// Global variables
const articleList = $("#article-list");
const endpoint = "https://blog.apiki.com/wp-json/wp/v2/posts?_embed&categories=518";
const spinner = $("#spinner");
var page = 1;

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

$.fn.loadPostsAjax = function (page) {

  $.fn.loadingAtivar();

  $.get(
    endpoint + "&page=" + page,
    function (data) {

      $.fn.loadingDesativar();
      var html = "";

      if (data.length > 0) {
        data.forEach(function (post) {
          html += `
            <article class="article format-video">
              <a
                href="detail.html?slug=${post.slug}">
                <picture class="article__picture ${post.format}">
                  <img width="350" height="250" class="article__image"
                    src="${post._embedded['wp:featuredmedia'][0].media_details.sizes.medium_large.source_url}"
                    alt="${post.title.rendered}" loading="lazy"
                    sizes="80px"
                    data-sizes="auto" data-expand="700"
                  </picture>
              </a>
              <div class="article-content">
                <h3 class="article-content__title">
                  <a
                    href="detail.html?slug=${post.slug}">${post.title.rendered}</a>
                </h3>
                <div class="article-meta">
                  <p class="article-meta__author">by ${post._embedded['author'][0].name}</p>
                </div>
                <div class="article-content__excerpt">
                  <p>${post.excerpt.rendered}</p>
                </div>
              </div>
            </article>
          `;
        });
      }
      else {
        html == "<h2>Nenhum artigo encontrado. Por favor tente novamente mais tarde.</h2>";
      }

      articleList.append(html);
    }
  ).fail(
    function () {
      $.fn.loadingDesativar();
      let html = "<h2>Nenhum artigo encontrado. Por favor tente novamente mais tarde.</h2>";
      articleList.html(html);
    }
  );
}


$(document).ready(function () {

  $.fn.loadPostsAjax(page);

  // Ajax call 
  $(this).on("click", "#load-more", function (event) {
    event.preventDefault();

    page += 1;
    $.fn.loadPostsAjax(page);
  });

});

$(window).on("load", function () {
  /**
     * Scroll to top of the page
     */
  $.fn.scrollExecutar();
});
