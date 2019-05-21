<?php get_header(); ?>

<?php
if (have_posts()){
    the_post();
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
                    <?php the_content(); ?>
                </p>

            </div>
        </div>
    </section>
    <?php
    }
?>

<?php get_footer(); ?>

