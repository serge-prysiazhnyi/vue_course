<template>
    <div>
        <h1>Cars</h1>
        <ul>
            <router-link tag="li" 
                v-for="(car, id) in 5" 
                :key="id" 
                :to="'/car/' + car"
            >
                <a>Car {{car}}</a>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>