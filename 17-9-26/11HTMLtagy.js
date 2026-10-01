
//vytvoreni html tagů
const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const img = document.createElement('img')
const a = document.createElement('a')

//naplneni html tagů
h1.textContent = 'text v h1<br>';
h1.innerHTML = 'text v h1<br>'
h2.textContent = 'text v h2'
h2.innerHTML = 'text v h1<br>'
img.src = 'adresa obrazku'
a.href = 'odkaz'
a.textContent = 'text odkazu'

//pridani do stranky
const section = document.getElementById('result');
section.append(h1)
section.append(h2)

