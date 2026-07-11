const products = ["A", "B", "C", "D"];
const buyPrice = [100, 200, 150, 80];
const sellPrice = [120, 180, 200, 100];
const quantity = [10, 5, 8, 12];

let totalProfit = 0
for (i = 0; i < products.length; i++){
    let p_name = products[i]

    let p_profit = (sellPrice[i] - buyPrice[i]) * quantity[i]
    console.log(`${p_name} profit is ${p_profit}`)

    totalProfit = totalProfit + p_profit
    console.log("Total Profit is: ", totalProfit)
}