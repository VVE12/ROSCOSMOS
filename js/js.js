//SCROLL JS SETTING
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
//PROGRESS BAR SETTINGS
$('document').ready(function() {
  randomize();
  var timer = setInterval(function() {
    randomize()
  }, 3000);
});

function randomize() {
  $('.progress .bar').each(function() {
    var val = Math.floor((Math.random() * 100));
    $(this).attr('style', 'width:' + val + '%;background-position:0 ' + val + '%');
  });
}