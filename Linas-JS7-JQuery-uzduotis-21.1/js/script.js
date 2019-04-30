//jei jQuery pjaunasi su JS

if (typeof jQuery != 'undefined') {

    console.log('jQuery is loaded properly');

}


(function ($) {
    // $( document ).ready(function() {
    $(function () {

        if (typeof jQuery == 'undefined') {

            // jQuery IS NOT loaded, do stuff here.

        }


        $('.manoSlepimoMygtukas').mouseenter(function () {
            console.log("labas");
            $('p').toggle();
        }).mouseleave(function () {
            console.log("ate");
            $('p').toggle();
        });

        $('.rutuliai-wrapper .rutulys:nth-child(1)').click(function () {
            console.log("click 1");
            $('.rutuliai-wrapper .rutulys:not(:nth-child(1))').toggle(2000);
        });

        $('.buttonWrapper button').click(function () {
            console.log("click button");
            let val1 = Number($('#vardas').val());
            let val2 = Number($('#pavarde').val());
            let val3 = Number($('#emailas').val());
            let atsakymas = val1+val2+val3;
            console.log(atsakymas);
            $('.atsakymas').html('<h2>' + atsakymas + '</h2>');
        });

    });
})(jQuery);