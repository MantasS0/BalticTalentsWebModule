
</div>
<footer>

    <div class="inner" >
        <img src="<?php echo get_theme_mod('footer_image'); ?>">

        <nav class="menu" >
            <?php wp_nav_menu(['theme_location' => 'header-menu']); ?>
        </nav >

        <div class="lineSeparator" ></div >
        <p > Nunc placerat dolor at lectus hendrerit dignissim . Ut tortor sem, consectetur nec hendrerit ut,
            ullamcorper ac odio . Donec viverra ligula at quam tincidunt imperdiet . Nulla mattis tincidunt
            auctor .</p >
        <div class="lineSeparator ninetyPercent" ></div >
        <p><?php echo get_theme_mod('footer_text'); ?></p>
        <div class="social" >
            <img class="facebook" src = "<?php echo get_template_directory_uri(); ?>/img/facebook.png" alt = "facebook" >
            <img class="twitter" src = "<?php echo get_template_directory_uri(); ?>/img/twitter.png" alt = "twitter" >
            <img class="instagram" src = "<?php echo get_template_directory_uri(); ?>/img/instagram.png" alt = "instagram" >
            <img class="pinterest" src = "<?php echo get_template_directory_uri(); ?>/img/pinterest.png" alt = "pinterest" >
        </div >
    </div >

</footer >

</body >
</html >

