let trikampiai = [];

let trikampis1 = {
    a: 3,
    b: 4,
    c: 5
};

let trikampis2 = {
    a: 8,
    b: 2,
    c: 10
};

let trikampis3 = {
    a: 4,
    b: 4,
    c: 4
};

let trikampis4 = {
    a: 6,
    b: 7,
    c: 6
};

let trikampis5 = {
    a: 20,
    b: 21,
    c: 20
};

trikampiai.push(trikampis1, trikampis2, trikampis3, trikampis4, trikampis5);

for (let i = 0; i < trikampiai.length; i++) {

    console.log(`Skaiciuojamas trikampis ${i + 1}`);

    let a = trikampiai[i].a;
    let b = trikampiai[i].b;
    let c = trikampiai[i].c;


    if (a + b <= c || a + c <= b || b + c <= a) {
        console.log(`Trikampis kurio krastines yra ${a}, ${b}, ${c} neegzistuoja.`)
    } else {

        let halfPerimeter = (a + b + c) / 2;

        let area = Math.sqrt(halfPerimeter * (halfPerimeter - a) * (halfPerimeter - b) * (halfPerimeter - c)).toFixed(3);

        if (a === b && a === c) {
            console.log(`Trikampis kurio krastines ${a}, ${b}, ${c} yra lygiasonis.\r
        Trikampio plotas yra: ${area}`)
        } else if (a === b || a === c) {
            console.log(`Trikampis kurio krastines ${a}, ${b}, ${c} yra lygiakrastis.\r
        Trikampio plotas yra: ${area}`)
        } else {
            console.log(`Trikampis kurio krastines ${a}, ${b}, ${c} yra ivairiakrastis.\r
        Trikampio plotas yra: ${area}`)
        }
    }

    /*
        if (a + b > c && a + c > b && b + c > a){
            console.log(`Trikampis kurio krastines ${a}, ${b}, ${c} yra ivairiakrastis.\r
            Trikampio plotas yra: ${area}`)
        }else if (a===b && a===c){
            console.log(`Trikampis kurio krastines ${a}, ${b}, ${c} yra lygiasonis.\r
            Trikampio plotas yra: ${area}`)
        }else if (a===b || a===c){
            console.log(`Trikampis kurio krastines ${a}, ${b}, ${c} yra lygiakrastis.\r
            Trikampio plotas yra: ${area}`)
        }else {
            console.log(`Trikampis kurio krastines yra ${a}, ${b}, ${c} neegzistuoja.`)
        }
    */

}






















