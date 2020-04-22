$(document).ready(function () {

    //Get Language JSON file...
    $.getJSON('lang.json', function (data) {

        //checking the preset language
        //if there is not a preset language
        //set preset language γκρικ...
        var displayLang = localStorage.getItem('eleas-thea-displayLang');
        if (!(displayLang == 'en' || displayLang == 'el' || displayLang == 'fr' || displayLang == 'it')) {
            localStorage.setItem('eleas-thea-displayLang', 'el');
            displayLang = 'el';
        }

        //printing preset language into DOM...
        //nav

        $("#lang_nav_menu").html(data.lang_nav_menu[displayLang]);
        $("#lang_nav_gallery").html(data.lang_nav_gallery[displayLang]);
        $("#lang_nav_contact").html(data.lang_nav_contact[displayLang]);
        $("#lang_nav_reservation").html(data.lang_nav_reservation[displayLang]);

        $("#lang_nav_menu2").html(data.lang_nav_menu[displayLang]);
        $("#lang_nav_gallery2").html(data.lang_nav_gallery[displayLang]);
        $("#lang_nav_contact2").html(data.lang_nav_contact[displayLang]);
        $("#lang_nav_reservation2").html(data.lang_nav_reservation[displayLang]);

        $("#lang_home_view").html(data.lang_home_view[displayLang]);
        $("#lang_owlDetails_1").html(data.lang_owlDetails_1[displayLang]);
        $("#lang_owlDetails_2").html(data.lang_owlDetails_2[displayLang]);
        $("#lang_owlDetails_3").html(data.lang_owlDetails_3[displayLang]);
        $("#lang_spcialities_title").html(data.lang_spcialities_title[displayLang]);
        $("#lang_spcialities_details2").html(data.lang_spcialities_details2[displayLang]);
        $("#lang_spcialities_details").html(data.lang_spcialities_details[displayLang]);
        $("#lang_spcialities_explainer").html(data.lang_spcialities_explainer[displayLang]);
        $("#lang_nav_spcialities").html(data.lang_nav_spcialities[displayLang]);
        $("#lang_nav_appetizer").html(data.lang_nav_appetizer[displayLang]);
        $(".lang_appetizer_menu").html(data.lang_appetizer_menu[displayLang]);
        $(".lang_main_menu").html(data.lang_main_menu[displayLang]);
        $(".lang_dessert_menu").html(data.lang_dessert_menu[displayLang]);
        $("#lang_nav_main").html(data.lang_nav_main[displayLang]);
        $("#lang_nav_dessert").html(data.lang_nav_dessert[displayLang]);
        $("#lang_reservation_title").html(data.lang_reservation_title[displayLang]);
        $("#lang_reservation_text").html(data.lang_reservation_text[displayLang]);
        $("#lang_reservation_fullname").html(data.lang_reservation_fullname[displayLang]);
        $("#lang_reservation_email").html(data.lang_reservation_email[displayLang]);
        $("#lang_reservation_phone").html(data.lang_reservation_phone[displayLang]);
        $("#lang_reservation_date").html(data.lang_reservation_date[displayLang]);

        $("#lang_reservation_option_1person").html(data.lang_reservation_option_1person[displayLang]);
        $("#lang_reservation_option_2persons").html(data.lang_reservation_option_2persons[displayLang]);
        $("#lang_reservation_option_3persons").html(data.lang_reservation_option_3persons[displayLang]);
        $("#lang_reservation_option_4persons").html(data.lang_reservation_option_4persons[displayLang]);
        $("#lang_reservation_option_5persons").html(data.lang_reservation_option_5persons[displayLang]);
        $("#lang_reservation_option_6persons").html(data.lang_reservation_option_6persons[displayLang]);
        $("#lang_reservation_option_7persons").html(data.lang_reservation_option_7persons[displayLang]);
        $("#lang_reservation_option_8persons").html(data.lang_reservation_option_8persons[displayLang]);


        $("#lang_reservation_btn").html(data.lang_reservation_btn[displayLang]);
        $("#lang_reservation_hint").html(data.lang_reservation_hint[displayLang]);
        $("#lang_quality_text").html(data.lang_quality_text[displayLang]);
        $("#lang_messaage_name").html(data.lang_messaage_name[displayLang]);
        $("#lang_messaage_email").html(data.lang_messaage_email[displayLang]);
        $("#lang_messaage_phone").html(data.lang_messaage_phone[displayLang]);
        $("#lang_messaage_urmessage").html(data.lang_messaage_urmessage[displayLang]);
        $("#lang_messaage_description").attr("placeholder", data.lang_messaage_description[displayLang]);
        $("#lang_messaage_btn").html(data.lang_messaage_btn[displayLang]);

        $("#lang_ajax_wait").html(data.lang_ajax_wait[displayLang]);
        $("#lang_ajax_success").html(data.lang_ajax_success[displayLang]);
        $("#lang_ajax_error").html(data.lang_ajax_error[displayLang]);
        $("#lang_ajax_ok").html(data.lang_ajax_ok[displayLang]);

        $("#lang_contact_location").html(data.lang_contact_location[displayLang]);
        $("#lang_contact_schedule").html(data.lang_contact_schedule[displayLang]);
    });

    //listen to change language events...
    $("#langSelector-en").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'en');
        location.reload();
    });

    $("#langSelector-el").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'el');
        location.reload();
    })
    $("#langSelector-fr").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'fr');
        location.reload();
    })
    $("#langSelector-it").on("click", function () {
        localStorage.setItem('eleas-thea-displayLang', 'it');
        location.reload();
    })
})