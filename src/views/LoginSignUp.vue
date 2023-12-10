<template>
    <section class="login-signup-container">
        <h1>Sign Up</h1>
        <form class="form-login-signup" @submit.prevent="onSave">
            <input type="text" class="username-field" v-model="user.name" placeholder="Enter your fullname">
            <button class="btn-regular">Submit</button>
        </form>

    </section>
</template>

<script>
    import {userService} from '../services/userService'
    export default {
        data(){
            return{
                user : userService.getEmptyUser()
            }
        },
        computed:{

        },
        methods:{
            async onSave(){
                await userService.saveUser(this.user)
                this.$router.push('/')
            }
        }

    }
</script>

<style lang="scss">
.login-signup-container{
    display: flex;
    flex-direction: column;
    place-items: center;
    h1{
            font-weight: 700;
            color: orange;
            margin-bottom: 45px;
    }
    .form-login-signup{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 4px 12px #23232329;
        padding-block: 24px;
        padding-inline: 15px;
        button{
            align-self: center;
        }
    }
}
</style>