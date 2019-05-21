<?php
if (have_posts()) {
    while (have_posts()) {
        //pasiekeme konkretaus iraso duomenis
        the_post();

        //galime naudoti funkcijas iraso dauomenims atspausdinti
        ?>

        <section class="post">
            <?php
            if (has_post_thumbnail()) { ?>
                <img src="<?php echo get_the_post_thumbnail_url(); ?>">
            <?php }
            ?>
            <div class="inner">
                <h3 class="label">I Do Observe</h3>
                <div class="container">
                    <h4 class="date"><?php the_date('Y.m.d'); ?></h4>
                    <h2><?php the_title(); ?></h2>
                    <div class="lineSeparator"></div>
                    <p>
                        <?php the_excerpt(); ?>
                    </p>
                    <div class="flexContainer">
                        <a href="<?php echo get_permalink(); ?>" class="readMore">Read more</a>
                        <ul class="hashtags">
                            <li>#Yosemite</li>
                            <li>#Peak</li>
                            <li>#Photo</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <?php

    }
}
?>