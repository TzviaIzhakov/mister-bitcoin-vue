<template>
    <article class="move-preview">
    <p><span>To </span>{{move.to}}</p>
    <p><span>At </span>{{move.at | date}}</p>
    <p><span>Amount </span>{{move.amount}}</p>
</article>

</template>

<script>
    export default {
        props:{
            move: {
                type: Object,
                required: true,
            }
        },
    }
</script>

<style lang="scss">
.move-preview{
    span{
        font-weight: 700;
    }
}
</style>