let num = document.getElementById('ins')
let sel = document.getElementById('sel')
let res = document.getElementById('res')
let ordem = []

function tratar (n) {
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function ilista (n,l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (tratar(num.value) && !ilista(num.value, ordem)) {
        ordem.push(Number(num.value))
        let ele = document.createElement('option')
        ele.text = `número ${num.value} adicionado`
        sel.appendChild(ele)
        res.innerText= ''
    } else {
        window.alert ('Número inválido ou já incluso na lista.')
    }
    num.value = ''
    num.focus()
} 

function clicar () {
    if (ordem.length == 0) {
        res.innerText = 'Caixa vazia. Por favor, a preencha.'
    } else {
        let tot = ordem.length
        let maior = ordem [0]
        let menor = ordem [0]
        let soma = 0
        let media = 0

        for (let pos in ordem) {
            soma += ordem [pos]
            if (ordem [pos] > maior) {
                maior = ordem [pos]
            } else if (ordem [pos] < menor) {
                menor = ordem [pos]
            }
        }
        media = soma / tot

        res.innerHTML = `<p>Ao todo, temos ${tot} números na sua lista.</p>`
        res.innerHTML += `<p>O maior número aqui é ${maior} e o menor ${menor}.</p>`
        res.innerHTML += `<p>A soma desses números é ${soma} e a média ${media}.</p>`
    }
}