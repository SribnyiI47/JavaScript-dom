let punkty = 0
let czas = 10
let auto = false

let p = document.getElementById("punkty")
let c = document.getElementById("czas")
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let kup = document.getElementById("kup")
let nick = document.getElementById("nick")
let podglad = document.getElementById("podglad")
let zapisz = document.getElementById("zapisz")
let tabela = document.getElementById("tabela")

plus.onclick = function(){
    punkty = punkty + 1
    p.innerHTML = punkty
    podglad.innerHTML = "Gracz: " + nick.value + " | Wynik: " + punkty
}

minus.onclick = function(){
    punkty = punkty - 1
    p.innerHTML = punkty
    podglad.innerHTML = "Gracz: " + nick.value + " | Wynik: " + punkty
}

kup.onclick = function(){
    if(punkty >= 20 && auto == false){
        auto = true
        punkty = punkty - 20
        setInterval(function(){
            punkty = punkty + 1
            p.innerHTML = punkty
            podglad.innerHTML = "Gracz: " + nick.value + " | Wynik: " + punkty
        }, 1000)
    }
}

let timer = setInterval(function(){
    czas = czas - 1
    c.innerHTML = czas
    if(czas <= 0){
        clearInterval(timer)
        plus.disabled = true
        minus.disabled = true
        kup.disabled = true
        zapisz.disabled = false
    }
}, 1000)

zapisz.onclick = function(){
    let nowy = tabela.insertRow(-1)
    let kol1 = nowy.insertCell(0)
    let kol2 = nowy.insertCell(1)
    kol1.innerHTML = nick.value
    kol2.innerHTML = punkty
}