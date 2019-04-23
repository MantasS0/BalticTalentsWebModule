document.getElementById("calculate").onclick = calculateRectangle;

function calculateRectangle() {
    let width = Number(document.getElementById("inputWidth").value);
    let length = Number(document.getElementById("inputLength").value);

    console.log(`width: ${width}\nlength: ${length}`);

    let perimeter = (width + length)*2;
    let area = width * length;

    document.getElementById("outputWidth").innerHTML = width;
    document.getElementById("outputLength").innerHTML = length;
    document.getElementById("outputPerimeter").innerHTML = perimeter;
    document.getElementById("outputArea").innerText = area;


}

















