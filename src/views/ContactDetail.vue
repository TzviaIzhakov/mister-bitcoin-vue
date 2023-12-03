<template>
    <h1>Contact Details</h1>
    <section v-if="contact" class="contact-details">
        <h2>{{contact.name}}</h2>
        <p>{{contact.email}}</p>
        <p>{{contact.phone}}</p>
        
            <RouterLink :to="`/contact/edit/${contact._id}`"><button>Edit</button>
            </RouterLink>
        
        <RouterLink to="/contact">
            <button>Back</button>
        </RouterLink>
    </section>
    <img v-else src="../assets/img/puff.svg" alt="" class="loader">
</template>

<script>
import { contactService } from '../services/contactService'
export default {
    data() {
        return {
            contact: null,
        }
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = this.contacts.find(contact=>contact._id === contactId)
    }
   
}
</script>

<style lang="scss">
.contact-details {
    display: grid;
    padding: 10px;
    background-color: rgb(252, 215, 147);

    a {
        justify-self: end;
    }
}
</style>