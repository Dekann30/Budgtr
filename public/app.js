console.log('this is connected')
let bankAccount = null
let total = []
for(entry of budget){
    let amount = entry.amount
    total.push(amount)
}
for (let i=0; i<total.length; i++){
    bankAccount += total[i]
}

console.log(total)

module.exports = total
