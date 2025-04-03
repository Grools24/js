// 2
let x = "witaj sweicie"
console.log(x);

// 3
x = "skibidi"
console.log(x)

// 4
const e = 2.718228
alert(e)

// 5
let zmienna = 12
console.log(typeof zmienna)

zmienna = "Język Java script"
console.log(typeof zmienna)

// 6
let opis = "JavaScript to język programowania"
console.log("Informacja:" +opis)

// 7
let a=21;
let b=17;
console.log(a + "+" + b + "=" + (a+b));
alert(a + "+" + b + "=" + (a+b)); 
// 8

let liczba=prompt("podaj liczbę: ")
console.log("Pobrana wartość: "+liczba)


// wstrzykiwanie kodu

// 1

const wynik= document.querySelector("#wynik");
let c = 15
let d = 5
wynik.innerHTML="wynik:"+(c+d)

// 2

const wynik2= document.querySelector("#wynik2")
let e1 = 75
let f = 123
document.getElementById("wynik2").innerHTML = "<h1>" + (e1+f) + "</h1>"

// 3

const wynik3 = document.querySelector("#wynik3")

let g = 75
let h = 123
wynik3.innerHTML = `wynik: ${g} + ${h} wynosi ${g+h}`

// pętle


// 1

let div = document.getElementById('petla')
let petla = ""
for (let i = 0; i  < 100; i++) {
    petla = petla + i +',';
}

div.innerHTML = petla;

// 2

let div2 = document.getElementById('petla2')
let petla2 = ""

for (let i = 0; i < 100; i++) {
    petla2 = petla2 += i + ','
}
div2.innerHTML = petla2;

// 3
let tabelka = document.getElementById('tabela')
let wyniktabelki = "";
for (let p = 0; p < 10; p++) {
    wyniktabelki +=
    `<tr>
        <td>${p}</td>
        <td>${p*p}</td>
    </tr>`;

}
tabelka.innerHTML = wyniktabelki;

// instruckje warunkowe

// 1