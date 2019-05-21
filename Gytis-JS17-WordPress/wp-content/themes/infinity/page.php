<?php get_header(); ?>

<?php if(have_posts()){
    the_post(); ?>
    <section>
        <?php the_content(); ?>
    </section>

    <?php
} ?>

<?php get_footer(); ?>