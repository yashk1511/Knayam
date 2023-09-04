$(document).ready(function () {
  $(".dropdown-toggle").click(function () {
    $(this).next(".dropdown-menu").slideToggle(300);
  });

  // Close dropdown when clicking outside
  $(document).click(function (event) {
    var target = $(event.target);
    if (
      !target.is(".dropdown-toggle") &&
      !target.parents().is(".dropdown-toggle")
    ) {
      $(".dropdown-menu").slideUp(300);
    }
  });
});
