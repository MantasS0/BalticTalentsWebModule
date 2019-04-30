<?php include 'header.php'; ?>


<div class="inner">

    <select id="selectTemp" onchange="addHelp()">
        <option value="celsius">to Celsius</option>
        <option value="fahrenheit">to Fahrenheit</option>
    </select>

    <div class="columnContainer">

        <div class="container">
            <input id="input" placeholder="Enter temperature">
            <div id="temp1">F</div>
        </div>

        <div class="container">
            <input id="output" placeholder="Converted value">
            <div id="temp2">C</div>
        </div>

    </div>

</div>

<button id="convert" onclick="convert()">Convert</button>


<?php include 'footer.php'; ?>
