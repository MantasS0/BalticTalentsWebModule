function changeLanguage(language) {
    if (language !== 'en' && language !== 'lt' && language !== 'de' && language !== 'es') {
        hello.innerHTML = 'Hello World!';
    } else {
        if (language === 'en') {
            hello.innerHTML = 'Hello World!';
        }
        if (language === 'lt') {
            hello.innerHTML = 'Labas Pasauli!';
        }
        if (language === 'de') {
            hello.innerHTML = 'Hallo Welt!';
        }
        if (language === 'es') {
            hello.innerHTML = 'Hola Mundo!';
        }
    }
}



















