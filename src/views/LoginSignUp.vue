<template>
    <section class="login-signup-container">
        <form class="form-login-signup" @submit.prevent="onSave">
            <input type="text" class="username-field" v-model="user.name">
            <button>Submit</button>
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

</style>