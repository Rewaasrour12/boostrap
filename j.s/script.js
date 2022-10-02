(function (window, document, $, undefined) {
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $("button").hover(function () {
      $(".tooltip-inner").css({ "background-color": "var(--bs-" + $(this).data("color") + ")" });
  });
})(window, document, jQuery);

