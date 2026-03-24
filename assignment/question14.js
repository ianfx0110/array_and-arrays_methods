// Question:
// Write a function maxProfit(prices, k) that returns the maximum profit
// from at most k buy-sell transactions.

// Scenario:
// Helps users on a trading platform maximize profit with limited trades.

function maxProfit(stockPrices, maxTrades) {

    // No prices or no trades → no profit
    if (stockPrices.length === 0 || maxTrades === 0) {
        return 0;
    }

    const totalDays = stockPrices.length;

    // If allowed trades are many → just take every profit opportunity
    if (maxTrades >= totalDays / 2) {
        let totalProfit = 0;

        for (let day = 1; day < totalDays; day++) {
            if (stockPrices[day] > stockPrices[day - 1]) {
                totalProfit += stockPrices[day] - stockPrices[day - 1];
            }
        }

        return totalProfit;
    }

    // Create table to track profits
    const profitTable = Array.from({ length: maxTrades + 1 }, () =>
        Array(totalDays).fill(0)
    );

    // Fill the table
    for (let transaction = 1; transaction <= maxTrades; transaction++) {

        let bestBuyValue = -stockPrices[0];

        for (let day = 1; day < totalDays; day++) {

            // Choose: no trade OR sell today
            profitTable[transaction][day] = Math.max(
                profitTable[transaction][day - 1],
                stockPrices[day] + bestBuyValue
            );

            // Update best buying point
            bestBuyValue = Math.max(
                bestBuyValue,
                profitTable[transaction - 1][day] - stockPrices[day]
            );
        }
    }

    return profitTable[maxTrades][totalDays - 1];
}


// Example
const stockPrices = [3, 2, 6, 5, 0, 3];
const maxTrades = 2;

console.log(maxProfit(stockPrices, maxTrades)); // 7
