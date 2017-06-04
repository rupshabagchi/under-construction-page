// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());


// -------------------------------------------------------------
// Countdown Time Setup
// -------------------------------------------------------------

$('.countdown').downCount({
  date: '06/10/2016 12:00:00',
  offset: +10
});


// -------------------------------------------------------------
// Google Map Customization
// -------------------------------------------------------------

jQuery(function($) {

  'use strict';

  var map;

  map = new GMaps({
    el: '#map-wrapper',
    lat: 60.1698557,
    lng: 24.938379,
    scrollwheel: false,
    zoom: 16,
    zoomControl: true,
    panControl: true,
    streetViewControl: true,
    mapTypeControl: false,
    overviewMapControl: false,
    clickable: true
  });

  var image = '';
  map.addMarker({
    lat: 23.475719,
    lng: 91.137101,
    icon: image,
    animation: google.maps.Animation.DROP,
    verticalAlign: 'bottom',
    horizontalAlign: 'center',
    backgroundColor: '#d9d9d9',
  });


  var styles = [{
      "stylers": [{
          "hue": "#007fff"
        },
        {
          "saturation": 89
        }
      ]
    },
    {
      "featureType": "water",
      "stylers": [{
        "color": "#ffffff"
      }]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }
  ];

  map.addStyle({
    styledMapName: "Styled Map",
    styles: styles,
    mapTypeId: "map_style"
  });

  map.setStyle("map_style");
}());

/**
 * MAILCHIMP
 */
$('#mc-form').ajaxChimp({
  url: 'http://doelit.us10.list-manage.com/subscribe/post?u=b02e4f21e264536eff4820875&amp;id=4d57faf2cb'
  /* Replace Your AjaxChimp Subscription Link */
});
