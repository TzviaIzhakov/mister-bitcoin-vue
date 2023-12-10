<template>
    <section class="contact-details-wrapper">
        <section v-if="contact" class="contact-details">
            <div class="flex username">
                <img src="../assets/img/users.png" alt="">
                <h2>{{contact.name}}</h2>
            </div>
            <div class="contact-phone-wrapper flex">
                <label>phone</label>
                <span class="contact-phone">{{contact.phone}}</span>
            </div>
            <div class="contact-phone-wrapper flex">
                <label>email</label>
                <p>{{contact.email}}</p>
            </div>
            <div class="actions">
                <RouterLink :to="`/contact/edit/${contact._id}`"><button class="edit"><img src="../assets/img/edit.png" alt=""></button>
                </RouterLink>
                <RouterLink to="/contact">
                    <button class="back"><img src="../assets/img/back.png" alt=""></button>
                </RouterLink>
            </div>
        </section>
        <section class="transfer-actions">
            <TransferFund :contact="contact" :user="user"/>
        </section>
    </section>
    <MoveList :contact="contact" :user="user"/>
</template>

<script>
import { contactService } from '../services/contactService'
import TransferFund from '../cmps/TransferFund.vue'
import MoveList from '../cmps/MoveList.vue'
import { userService } from '../services/userService'
export default {
    data() {
        return {
            contact: null,
            user: userService.getUser(),
        }
    },
    computed: {
        contacts() { return this.$store.getters.contacts }
    },
    async created() {
        const contactId = this.$route.params.id
        this.contact = this.contacts.find(contact=>contact._id === contactId)
    } ,
    components: {
        TransferFund,
        MoveList
}
   
}
</script>

<style lang="scss">
.contact-details-wrapper{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    @media screen and (max-width: 800px) {
		display: flex;
        flex-direction: column;
        input{
            width: 100%;
        }
	}
    .contact-details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 83px 40px;
    gap: 10px;
    border: 1px solid lightgray;
    border-radius: 5px;
    position: relative;
    margin: 50px auto;
    img{
        width: 2em;
        height: 2em;
    }
    .username{
        gap: 1em;
        margin-bottom: 10px;
        align-self: center;
        margin-bottom: 20px;
        h2{
            font-weight: 700;
        }
    }
    .contact-phone-wrapper{
      justify-content: space-between;
    }
    .actions{
			.back,.edit{
				position: absolute;
				top: 10px;
				background: none;
				border-style: none;
				width: 3em;
				height: 3em;
			}
            .back{
                left: 10px;
            }
            .edit{
                right: 10px;
            }
		}
      
}
.transfer-actions{
    justify-self: center;
    align-self: center;
}
}

</style>