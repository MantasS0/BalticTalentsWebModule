<?php
register_nav_menu('header-menu', 'Navigacijos meniu');

function register_my_customizer($wp_customize) {
 //sukuriame skyriu, kuriame bus nustatymai
    $wp_customize->add_section('footer_section', [
        'title' => 'Footerio nustatymai',
        'priority' => 1
        ]);

    // pridedame footer text nustatyma
    $wp_customize->add_setting('footer_text', [
        'default' => 'lorem ipsum',
        'transport' => 'refresh'
    ]);

    //pridedame galimybe keisti footer text nustatyma
    $wp_customize->add_control(new WP_Customize_Control($wp_customize, 'footer_text', [
        'label' => 'Footer tekstas',
        'section' => 'footer_section',
        'settings' => 'footer_text'
    ]));


    // pridedame footer image nustatyma
    $wp_customize->add_setting('footer_image', [
        'transport' => 'refresh'
    ]);

    //pridedame galimybe keisti footer image nustatyma
    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'footer_image', [
        'label' => 'Footer paveikslelis',
        'section' => 'footer_section',
        'settings' => 'footer_image'
    ]));


    // pridedame footer color nustatyma
    $wp_customize->add_setting('footer_color', [
        'default' => '#5c6bc0',
        'transport' => 'refresh'
    ]);

    //pridedame galimybe keisti footer color nustatyma
    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'footer_color', [
        'label' => 'Footer spalva',
        'section' => 'footer_section',
        'settings' => 'footer_color'
    ]));


}

add_action('customize_register', 'register_my_customizer');

?>