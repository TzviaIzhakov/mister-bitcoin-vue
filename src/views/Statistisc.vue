<template>
      <section class="main-layout">
        <div class="chart">
          <PriceHistory  v-if="priceHistory"
              :data="priceData"
              :labels="priceLabels"
              chartId="Price"/>
              <TransactionsHistory
              :data="transactionsData"
              :labels="transactionsLabels"/>
        </div>
      </section>
</template>

<script>
import PriceHistory from '../cmps/PriceHistory.vue';
import TransactionsHistory from '../cmps/TransactionsHistory.vue';
import { bitcoinService } from "../services/bitCoinService";

export default {
  data() {
    return {
      priceHistory: null,
      transactionsHistory: null,
    };
  },

  async created() {
    this.priceHistory = await bitcoinService.getMarketPriceHistory();
    this.transactionsHistory = (await bitcoinService.getTransactionsHistory())
  },

  computed: {
    priceLabels() {
      return this.priceHistory.map((pricePoint) => {
        const newDate = new Date(pricePoint.x * 1000);
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
        return dateToDisplay;
      });
    },

    priceData() {
      return this.priceHistory.map((pricePoint) => pricePoint.y);
    },

    transactionsLabels() {
      return this.transactionsHistory.map((pricePoint) => {
        const newDate = new Date(pricePoint.x * 1000);
        const dateToDisplay = new Intl.DateTimeFormat("en-US").format(newDate);
        return dateToDisplay;
      });
    },

    transactionsData() {
      return this.transactionsHistory.map((pricePoint) => pricePoint.y);
    },
},
components: {
    PriceHistory,
    TransactionsHistory
}
}
</script>

<style lang="scss">
.chart{
    display: grid;
    grid-template-rows: repeat(2,auto);
    gap: 1em;
    place-items: center;
  canvas{
    width: 70vw !important;
    height: 70vw !important;
  }
}

</style>