<template>
    <div>
        <p>Car id {{id}}</p>
        <button class="btn btn-primary" @click="goBackToCars">back</button>
    </div>
</template>

<script>
    /* eslint-disable */
    export default {
        data() {
            return {
                id: this.$route.params['id']
            }
        },
        methods: {
            goBackToCars() {
                this.$router.push('/')
            }
        },
        watch: {
            $route (toR, fromR) {
                this.id = toR.params['id']
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>