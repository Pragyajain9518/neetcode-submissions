
  class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0
        let storedValue = prices[0];
          for (let i = 1; i < prices.length; i++) {
    if (prices[i] < storedValue) {
      storedValue = prices[i];
      console.log(storedValue)
    }
          maxProfit = Math.max(maxProfit, prices[i] - storedValue);
  } 
  return maxProfit
    }
}
