<template>
    <div>
        <h2>Envoyer un message</h2>
        <form action="#" @submit.prevent="send">
            {{pseudo}}
            <label for="message"> Message :</label>
            <input type="text" id="message" v-model.trim="message" placeholder="Bonjour tout le monde">

            <input type="submit" value="Send" />
        </form>
        <h2>Liste des messages</h2>
        <ul>
            <li v-for="(message, index) of lastMessages" :key="index">
                <strong>{{message.author}}</strong> écrit : {{message.text}}
            </li>
        </ul>
    </div>
</template>

<script>

import io from 'socket.io-client'

export default {
    name :'LoginPage',
    data () {
        return {
            socket : null,
            messages: [],
            message : null,
            pseudo: this.$store.state.user.pseudo
        }
    },
    methods: {
        send() {
            const newMessage = {
                author: this.pseudo, text: this.message
            }

        this.socket.emit('message', newMessage)

        this.messages.push(newMessage)
        }
    },
    computed: {
        lastMessages() {
            return this.messages.slice(-10)
        }
    },
    created () {
        this.socket = io('//localhost:50437')
        this.socket.on('message', message => {
            this.messages.push(message)
        })
    }
}
</script>

<style>

</style>
