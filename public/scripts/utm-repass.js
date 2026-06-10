document.addEventListener('DOMContentLoaded', function () {
  var incoming = new URLSearchParams(window.location.search);
  if (!incoming.toString()) return;

  function isTrackingParam(key) {
    return key.indexOf('utm_') === 0 || key === 'fbclid' || key === 'gclid';
  }

  document.querySelectorAll('a[href*="checkout"]').forEach(function (link) {
    try {
      var linkUrl = new URL(link.href, window.location.origin);
      incoming.forEach(function (value, key) {
        if (isTrackingParam(key)) {
          linkUrl.searchParams.set(key, value);
        }
      });
      link.href = linkUrl.toString();
    } catch (e) {
      console.error('UTM repasse:', e);
    }
  });
});
