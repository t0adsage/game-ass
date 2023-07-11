var ass1 = document.querySelector('#ass1 .ass__discount');
var ass2 = document.querySelector('#ass2 .ass__discount');
var ass3 = document.querySelector('#ass3 .ass__discount');

function showDiscount(assElem) {
    var images = document.querySelectorAll('.ass__img');
    var discounts = document.querySelectorAll('.ass__discount')
    for (var i = 0; i < 3; i++) {
        images[i].classList.remove('underpants__animation');
        images[i].style.top = '80%';
        discounts[i].style.opacity = '1';
    }
    if (assElem === 'ass1') {
        ass1.classList.add('win');
        ass1.innerHTML = (typeof sale1 !== "undefined") ? sale1 : '50%';
        ass2.innerHTML = (typeof sale2 !== "undefined") ? sale2 : '30%'
        ass3.innerHTML = (typeof sale3 !== "undefined") ? sale3 : '20%'
    } else if (assElem === 'ass2') {
        ass2.classList.add('win');
        ass1.innerHTML = (typeof sale3 !== "undefined") ? sale3 : '20%';
        ass2.innerHTML = (typeof sale1 !== "undefined") ? sale1 : '50%'
        ass3.innerHTML = (typeof sale2 !== "undefined") ? sale2 : '30%'
    } else if (assElem === 'ass3') {
        ass3.classList.add('win');
        ass1.innerHTML = (typeof sale2 !== "undefined") ? sale2 : '30%';
        ass2.innerHTML = (typeof sale3 !== "undefined") ? sale3 : '20%'
        ass3.innerHTML = (typeof sale1 !== "undefined") ? sale1 : '50%'
    }

    showResultWindow();
    showForm();


}

function showResultWindow() {
    setTimeout(function () {
        $('.spin-result-wrapper').css('display', 'block');
    }, 2000);
};

function showForm() {
    setTimeout(function () {
        $('.ass__container').slideUp();
        $('.tspants_block').slideDown();
        start_timer();
    }, 4000);
};

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();

    var el = $('#roulette');
    if (!el) {
        el = $('#order_form')
    }
    var top = el.offset().top;
    $('body,html').animate({ scrollTop: top }, 800);
});


