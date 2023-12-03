import { bitcoinService } from "./bitCoinService"

export const data = {
  datasets: [
    {
      label: 'market price history',
      fill: false,
      borderColor: '#f87979',
      backgroundColor: '#f87979',
      data: await bitcoinService.getMarketPriceHistory()
    },
  
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
