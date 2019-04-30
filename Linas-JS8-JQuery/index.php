<?php include 'header.php'; ?>
























<a href="#" class="manoSlepimoMygtukas">Slepti</a>

<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur at debitis dignissimos dolorem, dolorum
    eius eligendi error eum, expedita ipsa laudantium maxime nihil nulla officia perspiciatis velit vitae
    voluptatem.</p>


<div class="rutuliai-wrapper">
    <div class="rutulys"></div>
    <div class="rutulys"></div>
    <div class="rutulys"></div>
</div>

<div class="manoForma">
    <div class="pavadinimas">
        <h1>Apskaiciuoti perimetra</h1>
    </div>
    <div class="formosItems">
        <input id="vardas" type="text" name="vardas" placeholder="vardas">
        <input id="pavarde" type="text" name="pavarde" placeholder="pavarde">
        <input id="emailas" type="text" name="emailas" placeholder="emailas">

    </div>
    <div class="buttonWrapper">
        <button>Submit</button>
    </div>

    <div class="atsakymas"></div>
</div>

<style>
    .rutulys {
        width: 100px;
        height: 100px;
        background-color: red;
        border-radius: 50%;
        display: inline-block;
        margin: 20px;
    }
    .formosItems input{
        margin-bottom: 10px;
    }
</style>

<?php include 'footer.php'; ?>
