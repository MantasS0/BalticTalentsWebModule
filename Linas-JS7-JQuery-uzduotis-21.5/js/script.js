if (typeof jQuery != 'undefined') {

    console.log('jQuery is loaded properly');

}


(function ($) {
    // $( document ).ready(function() {
    $(function () {

        $('select option').attr("name", "Productname");

        $('input.disabledCheckboxes').prop("disabled", false);
        // $('input.disabledCheckboxes').removeAttr("disabled");

        /*
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



                let maxLength = 10;
                $('textarea').keyup(function() {
                    let tlength = $(this).val().length;
                    $(this).val($(this).val().substring(0, maxLength));

                    let remainingChars = maxLength - tlength;
                    $('#rchars').text(remainingChars);
                });





                $("a[href='#top']").click(function() {
                    $("html, body").animate({ scrollTop: 0 }, "slow");
                    return false;
                });
        */


    });
})(jQuery);