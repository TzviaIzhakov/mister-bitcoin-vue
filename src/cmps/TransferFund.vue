<template>
    <section class="transfer-fund-container" v-if="user">
        <form class="transfer-fund"  @submit.prevent="onAddMove">
            <label for="">Transfer Coins</label>
            <input type="number" v-model="amount">
            <button>Transfer</button>
        </form>
    </section>
</template>

<script>
    import { userService } from '../services/userService';
    export default {
        props: {
            contact: {
                type: Object,
                required: true,
            },
            user:{
                type: Object,
                required: true,
            }
    },
        data(){
            return {
                amount: 0
            }
        },
        methods:{
             onAddMove(){
                const move = {toId: this.contact._id, to: this.contact.name, at: Date.now(), amount: this.amount}
                this.user.balance -= this.amount
                this.user.transactions.push(move)
                userService.addMove(this.user)
            }
        }
    }
</script>

<style lang="scss">

</style>