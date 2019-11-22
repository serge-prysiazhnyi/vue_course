<template>
    <div class="car-card">
        <h1>{{ name }}</h1>
        <p class="year">{{ year }}</p>
        <p>{{ desc }}</p>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        desc: {
            type: String,
            default: ''
        },
        year: {
            type: Number
        }
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        text-transform: uppercase;
        p {
            font-size: 16px;
        }
        .year {
            font-size: 20px;
        }
    }
</style>