import axios from 'axios';
export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
	  getAvgBlockSize,
}
const ENTITY = 'coin'
const gRates = []
function _getItem(coins){
    const rates = JSON.parse(localStorage.getItem(ENTITY) || 'null')
    if (!rates || rates.length === 0) {
      return
    }
   let bitCoin = rates.map((r)=>{
      if(r.coins===coins) {
        return r.bitcoin
      }
    })[0]    
    return bitCoin
  }

async function getRate(coins) {
    if(_getItem(coins)){
      return _getItem(coins)
    } 
    else{
      const res = await fetchData(coins)
      gRates.push({'coins': coins, 'bitcoin' : res})
      localStorage.setItem(ENTITY, JSON.stringify(gRates))
      return res
   }
}

async function fetchData(coins) {
    try {
      const bitcoin = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}&cors=true`)
      return bitcoin.data
    } catch (error) {
      throw error
      console.error(error);
    }
  }

 async function getMarketPriceHistory() {
    try {
      const marketPriceHistory = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)
      return marketPriceHistory.data.values
    } catch (error) {
      throw error
      console.error(error);
    }
}

function getAvgBlockSize(params) {
    
}