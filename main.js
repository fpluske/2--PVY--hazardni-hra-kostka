const statistika = document.getElementById('Statistika');
const imgKostka = document.getElementsByTagName('img')[0];
const infoKostka = document.querySelector('.badge.bg-dark');
const btnHrej = document.querySelector('button');
let hod;

btnHrej.addEventListener('click', function() {
    hod = Math.floor(Math.random()*6)+1;
    infoKostka.innerHTML = hod;
    imgKostka.src = `./img/kostka${hod}.png`;
});