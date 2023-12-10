<template>
    <section class="transfer-fund-container" v-if="user">
        <h1>Transfer Coins</h1>
        <form class="transfer-fund"  @submit.prevent="onAddMove">
            <input type="number" v-model="amount">
            <button class="btn-regular">Transfer</button>
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
.transfer-fund-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-block: 43px;
    h1{
        font-size: 30px;
        font-weight: 700;
        color: orange;
        margin-bottom: 45px;
    }
.transfer-fund{
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: center;
    gap: 12px;
    overflow: hidden;
    padding: 50px;
    border: 1px solid lightgray;
    button{
        align-self: center;
    }
}
}
</style>