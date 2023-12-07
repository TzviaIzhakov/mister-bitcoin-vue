import axios from 'axios';
import {dbService} from '../services/db.service'
export const bitcoinService = {
    getRate,
    getMarketPriceHistory,
	  getTransactionsHistory
}
const ENTITY = 'coin'
const PRICE_HISTORY_KEY = 'priceHistory'
const TRANSACTIONS_HISTORY_KEY = 'transactionHistory'
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
  let priceHistory = await dbService.query(PRICE_HISTORY_KEY)
  if (!priceHistory || !priceHistory.length) {
    try {
      const marketPriceHistory = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=1months&format=json&cors=true`)

      await dbService.insert(PRICE_HISTORY_KEY, marketPriceHistory.data.values)
      return marketPriceHistory.data.values
    } 
    catch (error) {
      throw error
    }
  }
  else{
    return priceHistory
  }
}

async function getTransactionsHistory() {
	let transactionsHistory = await dbService.query(TRANSACTIONS_HISTORY_KEY)
	
    if (!transactionsHistory || !transactionsHistory.length) {
		const url = 'https://api.blockchain.info/charts/trade-volume?timespan=1months&format=json&cors=true'
		const { data } = await axios.get(url)
		await dbService.insert(TRANSACTIONS_HISTORY_KEY, data.values)
		transactionsHistory = data.values
	}
  else{
    return transactionsHistory
  }
}