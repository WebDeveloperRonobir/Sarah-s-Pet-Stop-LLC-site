$(document).ready(function() {
    "use strict";

    // Calling LayerSlider 

    $('#slider').layerSlider({
        responsive: true,
        fitScreenWidth: false,
        responsiveUnder: 1280,
        layersContainer: 1280,
        thumbnailNavigation: 'disabled',
        skin: 'outline',
        hoverPrevNext: true,
        skinsPath: './vendor/layerslider/skins/',
        autoStart: true,
        autoPlayVideos: false
    });


});