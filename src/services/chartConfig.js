import { bitcoinService } from "./bitCoinService"

export const data = {
  datasets: [
    {
      label: 'market price history',
      fill: false,
      borderColor: '#f87979',
      backgroundColor: '#f87979',
      // await bitcoinService.getMarketPriceHistory()
      data:  [
        {
          x: -2,
          y: 4
        },
        {
          x: -1,
          y: 1
        },
        {
          x: 0,
          y: 0
        },
        {
          x: 1,
          y: 1
        },
        {
          x: 2,
          y: 4
        }
      ]
    },
  
  ]
}

export const options = {
  responsive: true,
  maintainAspectRatio: false
}
