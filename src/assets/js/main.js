$(document).ready(function () {
    let nearToBottom = 200;
    let photosBlock = $('#photos_block-js');
    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() >
            $(document).height() - nearToBottom) {
            $.ajax({
                url: 'https://dog.ceo/api/breeds/image/random',
                type: 'get',
                async: true,
                crossDomain: 'true',
                success: function (data) {
                    console.log(data['message']);
                    console.log(data);
                    photosBlock.append('\n' +
                        '                <div class="profile_photos-item">\n' +
                        '                    <div class="profile_photos-item-wrapper">\n' +
                        '                    <img src=' + data.message + ' alt="example">\n' +
                        '                        <div class="profile_photos-item-overlay">\n' +
                        '                            <span class="overlay_item">\n' +
                        '                                <i class="fa fa-heart"></i>\n' +
                        '                                486\n' +
                        '                            </span>\n' +
                        '                            <span class="overlay_item">\n' +
                        '                                <i class="fa fa-comment"></i>\n' +
                        '                                344\n' +
                        '                            </span>\n' +
                        '                        </div>\n' +
                        '                    </div>\n' +
                        '                </div>')
                }
            });
        }
    });
});


function convert(num) {
    let string = num.toString(), chunksLen, chunk, ints, i, word, words;
    if (num === 0) {
        return 'zero';
    }

    const units = ['',
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ];

    const tens = ['',
        '',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'];

    const scales = ['',
        'thousand',
        'million',
        'billion',
        'trillion',
        'quadrillion',
        'quintillion',
        'sextillion',
        'septillion',
        'octillion',
        'nonillion',
        'decillion',
        'undecillion',
        'duodecillion',
        'tredecillion',
        'quatttuor-decillion',
        'quindecillion',
        'sexdecillion',
        'septen-decillion',
        'octodecillion',
        'novemdecillion',
        'vigintillion',
        'centillion'
    ];

    let start = string.length;
    let end;
    let chunks = [];

    while (start > 0) {
        end = start;
        chunks.push(string.slice((start = Math.max(0, start - 3)), end));
        console.log(start);
    }

    console.log(end, 'end');
    console.log(chunks, 'chunks');

    chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }


}

// console.log(convert(23459));
