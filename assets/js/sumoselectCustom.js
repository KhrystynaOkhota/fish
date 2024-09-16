jQuery(function ($) {

    //sumoselect
    if ($('.orderby').length) {
        $('.orderby').each(function () {
            $(this).SumoSelect({
                floatWidth: 0,
                nativeOnDevice: [],
            });
        });
    }

});