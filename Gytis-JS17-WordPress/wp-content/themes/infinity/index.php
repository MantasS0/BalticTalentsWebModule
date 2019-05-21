<?php get_header(); ?>

<?php get_template_part('loop'); ?>


<!--
    <ul class="pagination">
        <li class="active">1</li>
        <li class="">2</li>
        <li class="">3</li>
    </ul>

-->
<?php echo paginate_links(); ?>


<?php get_footer(); ?>






