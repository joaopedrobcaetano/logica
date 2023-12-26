let timeLiverpool = [["Salah", 11, "atacante"],
["Diaz", 7, "atacante"],
["Mac Allister", 10, "meio-campo"]
]

console.log("O jogador " + timeLiverpool[2][0] + " joga com o número " + timeLiverpool[2][1] + " e a posição dele é " + timeLiverpool[2][2])

console.log(timeLiverpool.length)

let num = 10
console.log(num)
num += 2
console.log(num)
num = num - 6
console.log(num)

let resultado = 2 * (10*(5-(3*(2*(1+2)))))
console.log(resultado)

// Aprendendo estruturas de controle

let ehLigado = true

if(ehLigado){
    console.log("executar comando")
}

let possuiOvos = true
let itensComprados = ""

if (possuiOvos) {
    itensComprados = "Leite"
} else {
    console.log("passou na sessão de congelados")
    itensComprados = "Lasanha congelada"
}

console.log("item comprado: " + itensComprados)

let nivelDeFome = 100

if (nivelDeFome === 1) {
    console.log("Pouca fome")
} else if (nivelDeFome === 2) {
    console.log("Média fome")
} else {
    console.log("Muita fome")
}

// Aprendendo switch case

let fruta = "uva"

switch(fruta){
    case "maca":
        console.log("suco de maçã")
    break    
    
    case "banana":
        console.log("vitamina de banana")
    break

    case "laranja":
        console.log("suco de laranja")
    break
    
    default:
        console.log("suco genérico")
}