<template>
  <div id="app">

    <h2>Envoyer un message</h2>
    <form action="#" @submit.prevent="send">
      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" v-model.trim="pseudo" placeholder="John Doe...">

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
  name: 'app',
  data () {
    return {
      socket : null,
      messages: [],
      pseudo : null,
      message : null
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
