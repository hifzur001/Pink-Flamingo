function closeNotification() {
    document.querySelector('.notification-bar').style.display = 'none';
}

$(document).ready(function () {
    $('.dropdown').hover(
        function () {
            $(this).addClass('show');
            $(this).find('.dropdown-menu').addClass('show');
        },
        function () {
            $(this).removeClass('show');
            $(this).find('.dropdown-menu').removeClass('show');
        }
    );
});

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        items: 1, // Number of items to be displayed
        autoplay: true, // Autoplay
        autoplayTimeout: 3000, // Autoplay interval in milliseconds
        loop: true, // Loop the carousel
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 3,
            },
            1200: {
                items: 3,
            },
        },
    });
});

$(document).ready(function () {
    $('.btn-number').click(function (e) {
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());

        if (!isNaN(currentVal)) {
            if (type == 'minus') {
                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
            } else if (type == 'plus') {
                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
            }
        } else {
            input.val(0);
        }
    });
});
