$(document).ready(function(){
  setTimeout(() => {
    $('.screen-loading').hide();
    $("body.loading").removeClass("loading");
  }, 2000);
});