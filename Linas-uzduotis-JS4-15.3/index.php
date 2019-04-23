<?php include 'header.php'; ?>


<ul class="inputContainer">
    <li>
        <label class="width">Rectangle width:</label>
        <input class="width" id="inputWidth" placeholder="Enter width...">
    </li>
    <li>
        <label class="length">Rectangle length:</label>
        <input class="length" id="inputLength" placeholder="Enter length...">
    </li>
    <li>
        <input class="button" id="calculate" type="button" value="Calculate">
    </li>
</ul>
<ul class="outputContainer">
    <li>
        Primary rectangle parameters were:
    </li>
    <li>
        Width: <span id="outputWidth"></span>
    </li>
    <li>
        Length: <span id="outputLength"></span>
    </li>
    <li>
        Calculated rectangle parameters are:
    </li>
    <li>
        Perimeter: <span id="outputPerimeter"></span>
    </li>
    <li>
        Area: <span id="outputArea"></span>
    </li>
</ul>




<?php include 'footer.php'; ?>
