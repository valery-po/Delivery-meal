jQuery('.form-right__button').click( function() {
  var form = jQuery(this).closest('form');
  
  if ( form.valid() ) {
    form.css('opacity','.5');
    var actUrl = form.attr('action');

    jQuery.ajax({
      url: actUrl,
      type: 'POST',
      dataType: 'html',
      data: form.serialize(),
      success: function(data) {
        form.html(data);
        form.css('opacity','1');
                //form.find('.status').html('форма отправлена успешно');
                //$('#myModal').modal('show') // для бутстрапа
      },
      error:	 function() {
           form.find('.status').html('серверная ошибка');
      }
    });
  }
});









const swiper = new Swiper('.swiper-container', {
  loop: true,
  autoplay: true,
  effect: 'fade',
   fadeEffect: {
    crossFade: true
  },
});

AOS.init({
    enable: "phone",
    useClassNames: true,
    initClassName: false,
     animatedClassName: 'animated',
   
});


  //sticky scroll

    window.addEventListener("scroll", function() {
       const header = document.querySelector(".header");
       header.classList.toggle("sticky", window.scrollY > 0);
    })

const circle = document.querySelector(".progress");
const line = document.querySelector(".progress-line__item");
 const progressAnimation = () => {
   
    let scrollTop = window.scrollY;
    let windowHeight = window.innerHeight;
    let siteHeight = document.documentElement.scrollHeight;
    let persentageProgress = Math.floor(scrollTop / (siteHeight - windowHeight) * 100);
    line.style.width = `${persentageProgress}%`;
    
    let radius = circle.getAttribute("r");
    let circleLength = 2 * Math.PI * radius;
    circle.setAttribute("stroke-dasharray", circleLength);
    circle.setAttribute("stroke-dashoffset", -circleLength - circleLength * persentageProgress / 100);
  }
  
  
  window.addEventListener("scroll", () => {
   progressAnimation();
  });




//const menuItems = document.querySelectorAll('.menu__link[data-goto]');
//if(menuItems.length > 0){
//  menuItems.forEach(menuLink => {
//    menuLink.addEventListener("click", onMenuLinkClick);
//    
//  });
//  
//  function onMenuLinkClick(e) {
//    
//    const menuLink = e.target;
//    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
//      const gotoBlock = document.querySelector(menuLink.dataset.goto);
//       const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
//      
//      window.scrollTo({
//        top: gotoBlockValue,
//        behavior: 'smooth'
//      });
//     e.preventDefault();
//    }
//  }
//}



$(".menu-burger, .menu-items").on("click", function () {

  $(".menu-bg, .menu-burger, .menu-items").toggleClass("fs");
 
  document.body.classList.toggle("no-scroll");
  $(".menu-burger").text() == "☰"
    ? $(".menu-burger").text("✕")
    : $(".menu-burger").text("☰");
});

$(".menu-items").on("click", "a", function(event) {
        event.preventDefault();
        let id  = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top}, 1500);
});


function initialize() {
 var latlng = new google.maps.LatLng(57.0442, 9.9116);
 var settings = {
 zoom: 15,
 center: latlng,
 mapTypeControl: true,
 mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
 navigationControl: true,
 navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
 mapTypeId: google.maps.MapTypeId.ROADMAP
 };
var map = new google.maps.Map(document.getElementById("map_canvas"), 
settings);
}
var companyPos = new google.maps.LatLng(57.0442, 9.9116);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
title:"Some title"
});
  
var companyLogo = new google.maps.MarkerImage('image/icons/map.png',
new google.maps.Size(100,50),
new google.maps.Point(0,0),
new google.maps.Point(50,50)
);
var companyShadow = new google.maps.MarkerImage('image/icons/map.png',
new google.maps.Size(130,50),
new google.maps.Point(0,0),
new google.maps.Point(65, 50)
);
var companyPos = new google.maps.LatLng(57.0442, 9.9116);
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
icon: companyLogo,
shadow: companyShadow,
title:"Company Title",
});
var companyMarker = new google.maps.Marker({
position: companyPos,
map: map,
// icon: companyImage,
shadow: companyShadow,
title:"Høgenhaug",
zIndex: 4
});
























//function  map(n){
//  google.maps.Map.prototype.setCenterWithOffset = function(latlng, offsetX, offsetY){
//    
//    var map = this;
//    var ov = new google.maps.OverlayView();
//    ov.onAdd = function() {
//      var proj = this.getProjection();
//      var aPoint = proj.fromLatLngToContainerPixel(latlng);
//      aPoint.x = aPoint.x+offsetX;
//      aPoint.y = aPoint.y+offsetY;
//      map.panTo(proj.fromContainerPixelToLatLng(aPoint));
//    }
//    ov.draw = function(){};
//    ov.setMap(this);
//  };
//  var markers = newArray();
//  var infowindow = new google.maps.InfoWindow({
//    
//    
//  });
//  
//  var locations = [
//    [new google.maps.LatLng(53.819055, 27.8813694)]
//  ]
//  var options = {
//    zoom: 10,
//    panControl:false,
//    mapTypeControl:false,
//    center: locations[0][0],
//    scrollwheel:false,
//    mapTypeId: google.maps.MaptypeId.ROADMAP
//    
//  };
//  var map = new google.maps.Map(document.getElementById("map"), 
//   options);
//  
//  var icon = {
//    url: './image/icons/map.png',
//    scaledSize: new google.maps.Size(18, 20),
//    anchor: new google.maps.Point(9, 10)
//  }
//  for(var i = 0; i < locations.length; i++){
//    var marker = new google.maps.Marker({
//      position: locations[i][0],
//      map: map,
//    });
//    markers.push(marker)
//  }
//  if($("#map").lenght > 0){
//    map();
//  }
//}
