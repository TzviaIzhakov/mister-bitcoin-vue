<template>
    <article class="contact-preview">
        <div class="flex username">
            <img src="../assets/img/users.png" alt="">
            <h2>{{contact.name}}</h2>
        </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum odio necessitatibus odit repellendus non beatae magnam eveniet officiis, est mollitia quae pariatur saepe eius error sit corporis autem aliquam blanditiis ad. Id nostrum quaerat ut sed distinctio voluptate veritatis pariatur vel dolor corrupti debitis alias harum soluta repellendus fugit ducimus, veniam voluptatibus! Impedit odio saepe voluptatem, vel blanditiis veritatis dolores!</p>
        <!-- <div class="contact-phone-wrapper flex">
            <label>phone</label>
            <span class="contact-phone">{{contact.phone}}</span>
        </div>
        
        <div class="contact-phone-wrapper flex">
            <label>email</label>
            <p>{{contact.email}}</p>
        </div> -->
    </article>
</template>

<script>
export default {
    props: {
        contact: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style lang="scss">
.contact-preview{
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
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
      label{
        // font-weight: 900;
      }

    }
    
}
</style>
