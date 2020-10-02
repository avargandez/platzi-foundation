$(document).foundation()

$('[data-toggle-dia]').click(function(ev) {
  const panel = $(this).data('toggleDia')
  $('#collapsing-tabs').foundation('selectTab', panel)
});

const $offCanvas = $('#menuoffcanvas')
$offCanvas.find('span').click(function (ev) {
  $offCanvas.foundation('close')
})
document.querySelector('li.js-drilldown-back a').innerHTML = "atras";
