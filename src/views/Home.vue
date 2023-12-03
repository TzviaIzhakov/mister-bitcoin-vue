<template>
  <section class="home">
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, eaque. In aut earum veniam hic rem provident! Quibusdam dicta optio minima, quo corporis quam laborum praesentium culpa alias perspiciatis voluptatem suscipit et laboriosam, officiis asperiores excepturi porro dolorem incidunt quasi? Asperiores, explicabo eius. Iure, hic aliquam suscipit sint repudiandae debitis. Quos earum quas pariatur, aperiam eaque temporibus qui atque dolorum quae iste modi dolores harum error. Esse laudantium impedit veritatis earum molestias ipsum aliquid! Ab, ex? Ea saepe rem a assumenda est inventore perspiciatis ratione quo quod vel animi in, accusamus voluptatem esse unde possimus obcaecati laborum. Placeat, pariatur laudantium?</p>
    <section v-if="user">
      <p>{{ user.name }}</p>
      <p>{{ bitcoins }}</p>
    </section>
  </section>  
</template>

<script>  
  import {userService} from '../services/userService'
  import {bitcoinService} from '../services/bitCoinService'
  export default {
    data() {
            return {
                user: null,
                bitcoins: 0,
            }
         },
    methods: {
    },
    computed:{

    },
    async created(){
      this.user = userService.getUser()
      this.bitcoins = await bitcoinService.getRate(this.user.balance)
    },
    
}
</script>

<style lang="scss">

</style>
