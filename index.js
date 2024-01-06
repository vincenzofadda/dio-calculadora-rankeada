function winBalance(win, loss) {
    return win - loss
}

let rank = ""
let balanceResult = winBalance(83, 14)

if (balanceResult <= 10) {
    rank = "Ferro"
} else if (balanceResult >= 11 && balanceResult <= 20) {
    rank = "Bronze"
} else if (balanceResult >= 21 && balanceResult <= 50) {
    rank = "Prata"
} else if (balanceResult >= 51 && balanceResult <= 80) {
    rank = "Ouro"
} else if (balanceResult >= 81 && balanceResult <= 90) {
    rank = "Diamante"
} else if (balanceResult >= 91 && balanceResult <= 100) {
    rank = "Lendário"
} else {
    rank = "Imortal"
}


console.log(`O Herói tem saldo de ${balanceResult} e está no nível ${rank}`)