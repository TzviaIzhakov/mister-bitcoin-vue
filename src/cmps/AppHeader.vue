<template>
<section class="header-container full main-layout">
    <header class="app-header full main-layout">
        <div class="app-header-title-container">
            <img src="../assets/img/nicehash-svgrepo-com.svg" alt="logo">
            <h1>mister<span>BitCoin</span></h1>
        </div>
        <a href="#" class="toggle-button" @click="toggleMenu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </a>
        <div>
            <nav :class="{ 'open': isMenuOpen }">
            <RouterLink to="/contact" @click="closeMenu">Contact</RouterLink>
            <RouterLink to="/chart" @click="closeMenu">Statistics</RouterLink>
            <RouterLink to="/" @click="closeMenu">Home</RouterLink>
                  </nav>
        </div>
    </header>
</section>

</template>

<script>
    export default {
        data() {
            return {
            isMenuOpen: false,
            };
    },
        methods: {
        toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
        },
        closeMenu() {
        this.isMenuOpen = false;
        },
    },
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
       .toggle-button {
            position: absolute;
            top: 2.75rem;
            right: 1rem;
            display: none;
            flex-direction: column;
            justify-content: space-between;
            width: 30px;
            height: 21px;
        }
        .toggle-button .bar {
            height: 3px;
            width: 100%;
            background-color: black;
            border-radius: 10px;
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
        @media screen and (max-width: 800px) {
               
                .toggle-button {
                    display: flex;
                }
                nav{
                    display: none;
                    flex-direction: column;
                    align-items: flex-start;
                    width: 100%;
                    position: absolute;
                    top: 98px; 
                    left: 0;
                    background-color: #fff;
                    z-index: 10;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

                    &.open {
                    display: flex;
                    }

                    a {
                    width: 100%;
                    padding: 1rem;
                    color: #959595;
                    text-decoration: none;
                    text-align: center;
                    &:hover {
                        color: #fba342;
                        background-color: #f4f4f4;
                    }
                    }
                }
        }
    }
}
</style>