<template>
    <div>
        <h2>Se Connecter</h2>
        <form action="#" @submit.prevent="login">
            <label for="pseudo">Pseudo :</label>
            <input type="text" id="pseudo" v-model.trim="pseudo" placeholder="John Doe...">

            <input type="submit" value="Connection" />
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginPage',
    data () {
        return {
            pseudo: this.$store.state.user.pseudo
        }
    },
    methods: {
        login() {
            this.$store.commit('setPseudo', this.pseudo)
            this.$router.push('/chat')
        }
    }
}
</script>

<style>

</style>
