<template>
      <section class="contact-index">
        <ContactFilter @filter="setFilterBy"/>
            <RouterLink :to="`contact/edit/`"><button>Add</button>
            </RouterLink>
        <ContactList v-if="contacts" @remove="removeContact"  :contacts="filteredContacts" />
        <img v-else src="../assets/img/puff.svg" alt="" class="loader">
    </section>
</template>

<script>
    import ContactList from '../cmps/ContactList.vue'
    import ContactPreview from '../cmps/ContactPreview.vue'
    import ContactFilter from '../cmps/ContactFilter.vue'

    export default {
        data() {
            return {
                // contacts: null,
                filterBy: { name: ''},
            }
         },
        methods: {
            async removeContact(contactId) {
                try {
                    // await contactService.removeContact(contactId)
                    await this.$store.dispatch({ type: 'removeContact', contactId })
                    // const idx = this.contacts.findIndex(contact => contact._id === contactId)
                    // this.contacts.splice(idx, 1)
                } catch (error) {
                    console.log("{an't delete contact", err)
                }
              

                // eventBus.emit('user-msg', `Car ${contactId} deleted...`)
            },
            setFilterBy(filterBy) {
                this.filterBy = filterBy
            }
        },
        computed: {
            contacts() {
            return this.$store.getters.contacts
        },
            filteredContacts() {
                const regex = new RegExp(this.filterBy.name, 'i')
			    return this.contacts.filter(contact => regex.test(contact.name))
            }
        },
        async created() {
            // this.contacts = await contactService.getContacts()
            try {
                this.$store.dispatch({ type: 'loadContacts' })
            } catch (error) {
                console.error(error);
                throw error
            }
            
        },
        components: {
            ContactList,
            ContactPreview,
            ContactFilter
        }
    }
</script>

<style lang="scss">
    img.loader {
        display: block;
        width: 200px;
        margin: 30px auto;
    }
</style>