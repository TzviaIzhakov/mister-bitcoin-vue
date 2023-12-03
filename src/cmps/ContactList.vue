<template>
        <ul class="contact-list">
            <li v-for="contact in contacts" :key="contact._id">
                <RouterLink :to="`/contact/${contact._id}`">
                    <ContactPreview :contact="contact" />
                </RouterLink>
                <section class="actions">
                    <button @click="onRemoveContact(contact._id)" class="btn-remove">x</button>
                </section>
            </li>
        </ul>
</template>

<script>
import ContactPreview from '../cmps/ContactPreview.vue'
export default {
    props: {
        contacts: {
            type: Array,
            required: true,
        }
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    }
}
</script>

<style lang="scss">
.contact-list {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(309px,1fr));
    gap: 10px;
    margin-block-start: 10px;
    list-style: none;
    padding: 0;
}

.contact-list li {
    display: grid;
    padding: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    position: relative;
   
    a{
        text-decoration: none;
    }
    .actions{
       justify-self: end;
       position: absolute;
       top: 3px;
       right: 5px;
       .btn-remove{
            background: transparent;
            border-style: none;
            font-size: 1em;
       }
    }
  
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>