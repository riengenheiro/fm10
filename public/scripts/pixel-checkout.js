document.addEventListener('click', function (e) {
  var a = e.target.closest('a');
  if (!a || !a.href) return;
  if (typeof fbq !== 'undefined') {
    if (a.href.indexOf('checkout') !== -1) {
      fbq('track', 'InitiateCheckout', {
        content_name: 'Fábrica Mágica - Plano R$10',
        value: 10.0,
        currency: 'BRL',
      });
    }
  }
});
