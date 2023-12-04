<template>
    <section class="filter">
        <!-- <font-awesome-icon icon="fa-solid fa-user-secret" /> -->
        <!-- <font-awesome-icon :icon="['fas', 'magnifying-glass']" /> -->
        <div><i class="fa-solid fa-magnifying-glass search-icon "></i></div>
        <input 
            @input="onSetFilterBy" 
            v-model="filterBy.name"
            placeholder="Search"
            type="text" 
            class="input-filter">
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: { name: '' }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
.filter {
    padding: 10px;
    margin-block: 10px;
    position: relative;
    // &::before {
    //         content: '\f002'; /* Unicode for magnifying glass */
    //         position: absolute;
    //         top: 50%;
    //         left: 10px;
    //         transform: translateY(-50%);
    //         color: #555;
    //     }
    .search-icon {
            position: absolute;
            top: 50%;
            left: 17px;
            transform: translateY(-50%);
            color: #555;
            margin-right: 10px;
    }
}
</style>