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

</style>