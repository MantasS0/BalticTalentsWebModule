<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paskaita 16</title>

    <link href="css/reset.css" type="text/css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
    <link href="css/style.css" type="text/css" rel="stylesheet">
    <script src="js/script.js" defer></script>
</head>
<body>
<div class="inner">
    <header>
        <h1>Palo Alto</h1>
        <nav>
            <ul>
                <li class="active">Home</li>
                <li class="">About</li>
                <li class="">Archive</li>
                <li class="">Contact</li>
                <li class="">
                    <img alt="search" title="search" class="searchIcon" src="img/search.png">
                </li>
            </ul>
        </nav>
    </header>

    <section class="post one">

        <div class="inner">
            <h3 class="label">I Do Travel</h3>
            <div class="container">
                <h4 class="date">Sep 20</h4>
                <h2>No difference how many peaks you reach if there was no pleasure in the climb.</h2>
                <div class="lineSeparator"></div>
                <p>Quisque congue lacus mattis massa luctus, nec hendrerit purus aliquet. Ut ac elementum urna.
                    Pellentesque
                    suscipit metus et egestas congue. Duis eu pellentesque turpis, ut maximus metus. Sed ultrices tellus
                    vitae
                    rutrum congue. Fusce luctus augue id nisl suscipit, vel sollicitudin orci egestas. Morbi posuere
                    venenatis
                    ipsum, ac vestibulum quam dignissim efficitur. Ut vitae rutrum augue, in volutpat quam. Cras a
                    viverra
                    ipsum. Aenean ut consequat ex, vitae vulputate nunc. Vestibulum metus nisi, aliquam sed tincidunt
                    sit
                    amet,
                    pretium et augue.
                </p>
                <div class="flexContainer">
                    <a class="readMore">Read more</a>
                    <ul class="hashtags">
                        <li>#Yosemite</li>
                        <li>#Peak</li>
                        <li>#Explorer</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="post two">
        <div class="picture"></div>
        <div class="inner">
            <h3 class="label">I Do Observe</h3>
            <div class="container">
                <h4 class="date">Sep 18</h4>
                <h2>You know, I'd rather argue with you, then laugh with anyone else.</h2>
                <div class="lineSeparator"></div>
                <p class="summary">Curabitur luctus placerat lorem id eleifend. Nulla ac lacus finibus, tempor velit
                    hendrerit, vulputate lacus. Nunc fermentum nunc sem, ac eleifend tellus cursus nec. Donec a euismod
                    est, vitae accumsan purus. Proin aliquet ex massa, ac finibus magna commodo vitae. </p>
                <p>Quisque congue lacus mattis massa luctus, nec hendrerit purus aliquet. Ut ac elementum urna.
                    Pellentesque suscipit metus et egestas congue. Duis eu pellentesque turpis, ut maximus metus. Sed
                    ultrices tellus vitae rutrum congue. Fusce luctus augue id nisl suscipit, vel sollicitudin orci
                    egestas. Morbi posuere venenatis ipsum, ac vestibulum quam dignissim efficitur. Ut vitae rutrum
                    augue, in volutpat quam. Cras a viverra ipsum. Aenean ut consequat ex, vitae vulputate nunc.
                    Vestibulum metus nisi, aliquam sed tincidunt sit amet, pretium et augue.</p>
                <p>Sed sagittis commodo dolor. Vivamus elementum sem sed sapien bibendum viverra. Curabitur semper
                    scelerisque turpis eu ullamcorper. Morbi tincidunt auctor orci id consequat. Nulla odio mi, iaculis
                    id congue quis, euismod id nisi. In varius congue diam, et viverra lorem bibendum ut.</p>
                <div class="flexContainer">
                    <a class="readMore">Read more</a>
                    <ul class="hashtags">
                        <li>#Yosemite</li>
                        <li>#Peak</li>
                        <li>#Photo</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div>
        <?php
        $name = "Tadas";
        print ("Labas,Pasauli");

        for ($i = 0; $i < 10; $i++) {
            $number = sprintf(" %d", $i);
            echo $number;
        }
        ?>
    </div>

    <div>
        <?php
        echo $name."<br>";

        $connection = new mysqli('localhost', 'root', '', 'sandelys');
        if ($connection->connect_error) {
            echo "klaida prisijungiant prie db <br>";
        } else {
            echo "prisijungta prie db <br>";
        }

        $sql = "INSERT INTO darzove(name, origin, expiry) VALUES ('Morka','PL','2019-08-12')";

        $connection->query($sql);

        $connection->close();

        ?>
    </div>

    <ul class="pagination">
        <li class="active">1</li>
        <li class="">2</li>
        <li class="">3</li>
    </ul>
</div>

<footer>

    <div class="inner">
        <h1>Palo Alto</h1>

        <nav class="menu">
            <ul>
                <li class="active">Home</li>
                <li class="">About</li>
                <li class="">Archive</li>
                <li class="">Contact</li>
                <li class="">
                    <img alt="search" title="search" class="searchIcon" src="img/searchWhite.png">
                </li>
            </ul>
        </nav>

        <div class="lineSeparator"></div>
        <p>Nunc placerat dolor at lectus hendrerit dignissim. Ut tortor sem, consectetur nec hendrerit ut,
            ullamcorper ac odio. Donec viverra ligula at quam tincidunt imperdiet. Nulla mattis tincidunt
            auctor.</p>
        <div class="lineSeparator ninetyPercent"></div>
        <p>© 2015 - Palo Alto. All Rights Reserved. Designed & Developed by <a class="creatorLink">PixelBuddha Team</a>
        </p>
        <div class="social">
            <img class="facebook" src="img/facebook.png" alt="facebook">
            <img class="twitter" src="img/twitter.png" alt="twitter">
            <img class="instagram" src="img/instagram.png" alt="instagram">
            <img class="pinterest" src="img/pinterest.png" alt="pinterest">
        </div>
    </div>

</footer>

</body>
</html>






