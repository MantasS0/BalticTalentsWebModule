
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Uzduotis 16</title>


    <link href="<?php echo get_template_directory_uri(); ?>/css/reset.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
    <link href="<?php echo get_template_directory_uri(); ?>/style.css" type="text/css" rel="stylesheet">
    <script src="<?php echo get_template_directory_uri(); ?>/js/script.js" defer></script>

    <?php get_template_part('style'); ?>

</head>
<body>
<div class="inner">
    <header>
        <h1>Palo Alto</h1>
        <nav>
<?php wp_nav_menu(['theme_location' => 'header-menu']); ?>
        </nav>
    </header>