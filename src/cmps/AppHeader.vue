<template>
<section class="header-container full main-layout">
    <header class="app-header full main-layout">
        <div class="app-header-title-container">
            <img src="../assets/img/nicehash-svgrepo-com.svg" alt="logo">
            <h1>mister<span>BitCoin</span></h1>
        </div>
        <nav>
            <RouterLink to="/contact">Contact</RouterLink>
            <RouterLink to="/chart">Statistics</RouterLink>
            <RouterLink to="/">Home</RouterLink>
        </nav>
    </header>
</section>

</template>

<script>
    export default {

    }
</script>

<style lang="scss">
.header-container{
    position: sticky;
    top: 0;
    z-index: 20;
    width: 100%;
    border-block-end: 1px solid #e5e5e7;
    background-color: #fff;
    transition: background-color 0.6s, border-color 0.6s;
    min-height: 13vh;
    margin-bottom: 20px;
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 0;
      
       .app-header-title-container {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        cursor: pointer;
        h1{
            font-family: Ubuntu-Regular;
            span{
            font-family: Ubuntu-Regular;
                font-weight: 700;
            }
       }
        img{
            width:3em;
            padding-top: 5px;
            padding-left: 15px;
        }
       }
        nav{
            display: flex;
            align-items: center;
            a{
                margin-right: 15px;
                color: #959595;
                text-decoration: none;
                font-weight: 500;
                &:hover{
                    color: #fba342;
                    box-shadow: inset 0 -2.5px #fba342;
                }
            }
        }
        .active{
            color: #fba342;
            box-shadow: inset 0 -2.5px #fba342;
        }
    }
}
</style>