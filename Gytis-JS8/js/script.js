const triangles = [
    {a: 1, b: 2, c: 3},
    {a: 3, b: 4, c: 5},
    {a: 3, b: 3, c: 3},
    {a: 10, b: 2, c: 4}
];

for (let triangle of triangles) {
    let existence = isTriangle(triangle.a, triangle.b, triangle.c);
    console.log(`Trikampis ${writeExistence(existence)}`);
    console.log(`Trikampio A krastine: ${triangle.a}`);
    console.log(`Trikampio B krastine: ${triangle.b}`);
    console.log(`Trikampio C krastine: ${triangle.c}`);
    if (existence) {
        console.log(`Trikampio perimetras: ${calculateTrianglePerimeter(triangle.a, triangle.b, triangle.c)}`);
        if (isTriangleRightAngle(triangle.a, triangle.b, triangle.c)) {
            console.log(`Trikampis yra status`);
        } else {
            console.log(`Trikampis nera status`);
        }
    }
    console.log(`------------------------`);
}

function calculateTrianglePerimeter(a, b, c) {
    return a + b + c;
}

function writeExistence(bolean) {
    if (bolean) {
        return 'egzistuoja'
    }
    return 'neegzistuoja'
}

//functions that return boolean are named with "is", "can", "has".  !!!!!!!

function isTriangle(a, b, c) {
    return !(a + b <= c || b + c <= a || a + c <= b);
}

function isTriangleRightAngle(a, b, c) {
    return a ** 2 + b ** 2 === c ** 2 || b ** 2 + c ** 2 === a ** 2 || a ** 2 + c ** 2 === b ** 2;

}


