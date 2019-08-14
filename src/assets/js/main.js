$(document).ready(function () {
    if ($('.profile_content').length) {
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
    }

    if ($('.algorithm_content').length) {
        $('body').on('click', '.algorithm_content-btn', function () {
            let convertNum = convert(parseInt($('.algorithm_content-input').val()));
            $('.algorithm_content-answer').text(convertNum)
        })
    }
});

function convert(num) {
    let string = num.toString();
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
        start = Math.max(0, start - 3);
        chunks.push(string.slice(start, end));
    }

    let chunksLen = chunks.length;
    if (chunksLen > scales.length) {
        return '';
    }

    let words = [];
    let word;
    let chunk;
    let ints;
    for (let i = 0; i < chunksLen; i++) {
        chunk = parseInt(chunks[i]);
        if (chunk) {
            ints = chunks[i].split('').reverse().map(parseFloat);
            if (ints[1] === 1) {
                ints[0] += 10;
            }

            if ((word = scales[i])) {
                words.push(word);
            }

            if ((word = units[ints[0]])) {
                words.push(word);
            }

            if ((word = tens[ints[1]])) {
                words.push(word);
            }

            if ((word = units[ints[2]])) {
                words.push(word + ' hundred');
            }
        }

    }
    return words.reverse().join(' ');
}

console.log(convert(123214));