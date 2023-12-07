<template>
	<section v-if="contact" class="contact-edit-container">
		<h2>{{ displayTitle }}</h2>
		<form class="contact-edit" @submit.prevent="onSave">
			<label for="name">Name</label>
			<input type="text" id="name" v-model="contact.name"/>
			<label for="phone">Phone</label>
			<input type="tel" v-model="contact.phone" id="phone"/>
			<label for="email">Email</label>
			<input id="email" type="email" v-model="contact.email" />
			<div class="actions">
				<button class="btn-regular">Submit</button>
				<button type="button" class="back" @click="back"><img src="../assets/img/back.png" alt=""></button>
			</div>
		</form>
	</section>
	<img v-else src="../assets/img/puff.svg" alt="loader" class="loader">
</template>

<script>
import { contactService } from '../services/contactService'
import { eventBus } from '../services/eventBus.service.js'
export default {
	data() {
		return {
			contact: null,
		}
	},

	async created() {
		const contactId = this.$route.params.id
		console.log(this.contacts,"pp");
		if (contactId) {
            try {
				const contact = this.contacts.find(contact => contact._id === contactId)
            	this.contact = JSON.parse(JSON.stringify(contact))
            } catch (err) {
                console.log(err)
            }
		} else {
            this.contact = contactService.getEmptyContact()
        }
	},

	computed: {
		displayTitle() {
			return this.contact._id ? `Edit` : 'Add new contact'
		},
		contacts() { return this.$store.getters.contacts }
	},

	methods: {
		back() {
			this.$router.push('/contact')
		},

		async onSave() {
			// await contactService.save(this.contact)
			const isUpdate = !!this.$route.params.carId

		try {
			await this.$store.dispatch({ type: 'saveContact', contact: this.contact })
			// await carService.save(this.contact)

			if(isUpdate){
				eventBus.emit('user-msg', 'Contact Updated')
			} else {
				eventBus.emit('user-msg', 'Contact Saved')
			}
		} catch (err) {
			eventBus.emit('user-msg', `Couldn't save contact`)
		}
			this.back()
		},
	},
}
</script>

<style lang="scss">
.contact-edit-container{
    display: flex;
	flex-direction: column;
    place-items: center;
	h2{
    font-size: 30px;
    font-weight: 700;
    color: orange;
    margin-bottom: 45px;
	}
    .contact-edit{
        display: flex;
		position: relative;
        flex-direction: column;
        justify-content: center;
        gap: 12px;
        box-shadow: 0 4px 12px 0 rgba(35, 35, 35, 0.16);
        overflow: hidden;
        padding: 50px;
        label{
            color: #fba342;
            font-weight: 500;
        }
		.actions{
			.back{
				position: absolute;
				left: 10px;
    			top: 10px;
				background: none;
				border-style: none;
				width: 3em;
				height: 3em;
			}
		}
      
        
    }
	@media screen and (max-width: 600px) {
		.contact-edit{
			input{
				width: auto;
			}
		}
	}
}
	

</style>
