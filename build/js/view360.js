var gif360, isGifRun = false;
$(document).ready(function(){
    $("#photoView360").spritespin({
        source: photoView360,
        zoomUseClick: true,
        zoomPinFrame: true,
        sense: -1,
        animate: true,
        sizeMode: 'fit',
        frameTime: 80,
        width: window.innerWidth,
        height: window.innerHeight,
        plugins: [
            '360',  // display plugin
            'drag', // interaction plugin
            'zoom'  // zoom plugin
        ]
    });
    $(".view_360_link .icon-360_view.fancy").fancybox({
        'scrolling' : 'no',
        'modal' : false,
        'touch': false
    });
    $(".product-card__360-btns-item.zoom").click(function(){
        $("#photoView360").spritespin('api').toggleZoom();
    });
    $(".product-card__360-btns-item.close").click(function(){
        $.fancybox.close();
    });
    $(".product-card__360-btns-item.get").click(function(e){
        e.preventDefault();
        var ID = $(this).data("id");
        $.ajax({
            url: '/ajax/download-product-photo.php',
            type: 'POST',
            data: {
                ID: ID
            },
            success: function(data){
                window.location.href=data;
            }
        });
        return false;
    });
    $(".product-card__360-btns-item.share").fancybox({
        'scrolling' : 'no',
        'modal' : false,
        'showCloseButton' : true,
        'touch': false
    });
    $(".product-card__360-btns-item.gif").click(function(){
        if(isGifRun){
            alert('Идёт генерация Gif');
            return;
        }
        isGifRun = true;
        gif360 = new GIF({
            workers: 1,
            workerScript: '/local/templates/timberk/scripts/gif.worker.js',
            repeat: 0,
            quality: 15,
            width: 800,
            height: 800
        });
        waitForImagesLoaded(photoView360Gif, function(images){
            for (var i = 0; i < images.length; i++) {
                gif360.addFrame(images[i], {
                    delay: 100,
                    copy: true
                });
            }
            gif360.render();
        });
        gif360.on('start', function() {
            console.log('Gif start');
        });
        gif360.on('progress', function(p) {
            console.log("Rendering frame(s) at q" + gif360.options.quality + "... " + (Math.round(p * 100)) + "%");
        });
        gif360.on('finished', function(blob) {
            isGifRun = false;
            console.log('Gif finish');
            url = URL.createObjectURL(blob);
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.style = "display: none";
            a.href = url;
            a.download = productCode+'.gif';
            a.click();
            window.URL.revokeObjectURL(url);

        });

    });

    hljs.initHighlightingOnLoad();
});

function waitForImagesLoaded(imageURLs, callback){
    var imageElements = [];
    var remaining = imageURLs.length;
    var onEachImageLoad = function(){
        if (--remaining === 0 && callback) {
            callback(imageElements);
        }
    };
    for (var i = 0, len = imageURLs.length; i < len; i++){
        var img = new Image();
        imageElements.push(img);
        img.onload = onEachImageLoad;
        img.src = imageURLs[i];
    }
}