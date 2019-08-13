'use strict';

var asd = 'asdas';
console.log(asd);
$(document).ready(function () {
    var nearToBottom = 200;
    var photosBlock = $('#photos_block-js');
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - nearToBottom) {
            $.ajax({
                url: 'https://dog.ceo/api/breeds/image/random',
                type: 'get',
                async: true,
                crossDomain: 'true',
                success: function success(data) {
                    console.log(data['message']);
                    console.log(data);
                    photosBlock.append('\n' + '                <div class="profile_photos-item">\n' + '                    <div class="profile_photos-item-wrapper">\n' + '                    <img src=' + data.message + ' alt="example">\n' + '                        <div class="profile_photos-item-overlay">\n' + '                            <span class="overlay_item">\n' + '                                <i class="fa fa-heart"></i>\n' + '                                486\n' + '                            </span>\n' + '                            <span class="overlay_item">\n' + '                                <i class="fa fa-comment"></i>\n' + '                                344\n' + '                            </span>\n' + '                        </div>\n' + '                    </div>\n' + '                </div>');
                }
            });
        }
    });
});