<?php include 'header.php';  ?>





<select id="selectTemp" onchange="addHelp()">
   <option value="celsius">to Celsius</option>
   <option value="fahrenheit">to Fahrenheit</option>
</select>
<input id="input" placeholder="Enter temperature">
<div id="temp1">F</div>
<input id="output" placeholder="Converted value">
<div id="temp2">C</div>
<button id="convert" onclick="convert()">Convert</button>






<?php include 'footer.php';?>
