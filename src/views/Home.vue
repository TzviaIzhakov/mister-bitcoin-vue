<template>
  <section class="home main-layout full">
    <div class="user-profile-container main-layout full" v-if="user">
        <div class="user-profile flex">
          <img src="../assets/img/users.png" alt="user-img">
          <div class="flex column ">
            <h1 class="title">{{ user.name }}</h1>
              <div class="flex">
                <span class="coin-info flex column">Coins <span>{{user.balance}}</span></span>
                <div class="coin-info flex column">Bitcoins <span >{{bitcoins}}</span></div>
              </div>
          </div>
        </div>
    </div>
  
    <div class="mister-bit-coin-desc main-layout full">
      <div class="title-wrapper flex">
        <img src="../assets/img/nicehash-svgrepo-com.svg" alt="logo">
        <h1>mister<span>BitCoin</span></h1>
      </div>
      <h1 class="sub-title">World's leading <span>Hashpower marketplace</span></h1>
      <h3 class="mini-desc">connect your miners and earn Bitcoin for every share</h3>
    </div>

    <div class="user-tools-container">
      <div class="user-tool-wrapper flex column">
        <img src="https://www.nicehash.com/assets/7c25d3fe987f02cb18c4.png" alt="">
        <h2 class="user-tool-desc sub-title">
          Earn Bitcoin with your <span>PC, GPU & CPU</span>
        </h2>
        <h3 class="mini-desc user-mini-desc">Start mining the quick way with our world renowned software</h3>
        <p class="tip">There’s no easier way to get Bitcoin</p>
      </div>
      
      <div class="user-tool-wrapper flex column">
        <img src="https://www.nicehash.com/assets/754fe246dbb432e011c3.png" alt="sign-up">
        <h2 class="user-tool-desc sub-title">
          ASIC <span>Mining</span>
        </h2>
        <h3 class="mini-desc user-mini-desc">Earn Bitcoin with any ASIC miner and benefit from our support for large operations</h3>
        <p class="tip">No contracts. No limits.</p>
      </div>
    </div>

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
.home{
  margin-bottom: 3rem;
  .user-profile-container{
      border-radius: 50px;
     box-shadow: 0 0 10px rgb(0 0 0 / 10%);
      padding: 20px;
      margin-bottom: 1em;
      .user-profile{
        align-items: center;
        gap: 0.5em;
        .title{
        margin-bottom: 10px;
        font-weight: 700;
        font-size: 32px;
        color: rgb(91, 90, 90);
      }
      img{
        width: 3em;
        height: 3em;
        margin-right: 10px;
      }
      .coin-info{
        margin-right: 10px;
        font-weight: 700;
        color: rgb(134, 141, 141);
      }
      }
      
    }
  .mister-bit-coin-desc{
    margin-bottom: 1rem;
    color: aliceblue;
    background-image: url("https://www.nicehash.com/assets/ff8839bcad723e1b8204.jpg");
    background-position: 50% 50%;
    background-size: cover;
    padding: 200px 0px 110px;
    place-items: center;
   
    .title-wrapper{
      align-items: center;
      gap: 0.5em;
      margin-bottom: 48px;
      h1{
        font-size: 40px;
        span{
          font-weight: 700;
        }
      }
      img{
        width: 2.5em;
        height: 2.5em;
      }
    }
  }
  .sub-title{
        font-size: 48px;
        line-height: 55px;
        margin-bottom: 32px;
        text-align: center;

      span{
          color:  #fbc241;
      }
    }
  .mini-desc{
      font-size: 24px;
      line-height: 24px;
      text-align: center;
  }
  .user-tools-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    place-items: center;
    gap: 1em;
    .user-tool-wrapper{
      background-color: #fafafa;
      padding: 48px 32px 0px;
      justify-content: center;
      align-items: center;
      img{
        width: 20em;
        height: 220px;
        margin-bottom: 1em;
      }
      .user-tool-desc{
        font-size: 40px;
        font-weight: 700;
      }
      .user-mini-desc{
        line-height: 30px;
        font-size: 20px;
        margin-bottom: 32px;
      }
      .tip{
        text-align: center;
        color:#fba342;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 1em;
      }
    }
  }
}

</style>
