<template>
	<section v-if="contact" class="contact-edit">
		<h2>{{ displayTitle }}</h2>

		<form class="edit-form" @submit.prevent="onSave">
			<input type="text" v-model="contact.name" />
			<input type="tel" v-model="contact.phone" />
			<input type="email" v-model="contact.email" />
			<div class="actions">
				<button>Save</button>
				<button type="button" @click="back">Back</button>
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
.contact-edit {
	.edit-form {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 15px;

		> input {
			min-width: 300px;
			border-radius: 16px;
			height: 1.5rem;
			padding: 14px 24px;
		}
		button {
			margin-inline-end: 15px;
		}
	}
}
</style>
