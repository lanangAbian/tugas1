const ubahwarna = document.getElementById('ubahwarna')
ubahwarna.onclick= function() {
    // document.body.style.backgroundColor = 'lightgreen';
    // document.body.setAttribute('class', 'hijau-muda');
    document.body.classList.toggle('hijau-muda');
}

const acakwarna = document.createElement('button');
const tekstombol = document.createTextNode('Acak Warna');
acakwarna.appendChild(tekstombol);
acakwarna.setAttribute('type', 'button');
ubahwarna.after(acakwarna);

acakwarna.addEventListener('click', function(){
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

const slidermerah = document.querySelector('input[name=slidermerah]');
const sliderhijau = document.querySelector('input[name=sliderhijau]')
const sliderbiru = document.querySelector('input[name=sliderbiru]')

slidermerah.addEventListener('change', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+', '+b+')';
});

sliderhijau.addEventListener('change', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+', '+b+')';
});

sliderbiru.addEventListener('change', function(){
    const r = slidermerah.value;
    const g = sliderhijau.value;
    const b = sliderbiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+', '+b+')';
});

document.body.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerWidth) * 255);
    
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';
});