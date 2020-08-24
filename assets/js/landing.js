$( ".ppp-img-hover a" ).hover(function() {
  var URI = $(this).attr('id');
    if (URI == "1") {document.getElementById('ppp-img').src='assets/img/landing/1.jpg'}
    else if (URI == "2") {document.getElementById('ppp-img').src='assets/img/landing/2.jpg'}
    else if (URI == "3") {document.getElementById('ppp-img').src='assets/img/landing/3.jpg'}
    else if (URI == "4") {document.getElementById('ppp-img').src='assets/img/landing/4.jpg'}
    else if (URI == "5") {document.getElementById('ppp-img').src='assets/img/landing/5.jpg'}
  
});

$( ".ppp-img-hover" ).mouseleave(function() {
    document.getElementById('ppp-img').src='assets/img/landing/perry.jpg'
});


//// When any of the a's inside of sidebarContainer are hovered
//$( ".sidebarContainer a" ).hover(function() {
//  // Removes all previous classes but keeps sidebar1
//  $('.sidebar1').removeClass().addClass('sidebar1');
//  // Splits up the URL on the current href
//  var URI = $(this).attr('href').split('/');
//  console.log(URI[2]);
//  // Applies the last part of the URL to sidebar1 
//  $('.sidebar1').addClass(URI[2]);
//});