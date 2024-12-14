var main = function() {
    $('.more-btn').on('click', e => {
        $(e.currentTarget).next().toggle(); // I could also use .siblings('.more-menu').toggle()
    });
    $('.share').on('click', e => {
        $(e.currentTarget).next().toggle();
    });
    $('.notification').on('click', e =>{
        $(e.currentTarget).toggleClass('active');
    });
};

$(document).ready(main);