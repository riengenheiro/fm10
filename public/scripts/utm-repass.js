document.addEventListener('DOMContentLoaded', function () {
  var urlParams = window.location.search;
  if (urlParams) {
    document.querySelectorAll('a').forEach(function (link) {
      if (link.href && link.href.indexOf('checkout') !== -1) {
        try {
          var linkUrl = new URL(link.href);
          new URLSearchParams(urlParams).forEach(function (value, key) {
            linkUrl.searchParams.set(key, value);
          });
          link.href = linkUrl.toString();
        } catch (e) {}
      }
    });
  }
});
