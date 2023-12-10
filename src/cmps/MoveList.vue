<template>
    <section class="move-list-container" v-if="user">
    <h1>Your Moves</h1>
    <ul class="move-list">
            <li v-for="move in loadMoves" :key="move.toId">
                    <MovePreview :move="move" />
            </li>
    </ul>
</section>
</template>

<script>
import MovePreview from './MovePreview.vue';
    export default {
        props:{
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
            return{
                // loadMoves: user.transactions.filter(move=> move.toId===this.contact._id)
            }
        },
        methods:{
           
        },
        computed:{
            loadMoves(){
                return this.user.transactions.filter(move=> move.toId===this.contact._id)
            }
        },
        // created(){
        //     console.log(this.loadMoves());
        // },
        components:{
            MovePreview
        }
    }
</script>

<style lang="scss">
.move-list-container{
    border: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    place-items: center;
    h1{
        font-size: 30px;
        font-weight: 700;
        color: orange;
        margin-bottom: 45px;
    }
    .move-list{
        display: flex;
        flex-wrap: wrap;
        gap: 41px;
        list-style: none;
    }
}
</style>