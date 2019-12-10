<template>
    <div class="car-card">
        <h4 class="make">{{ make }}</h4>
        <p class="model">{{ model }}</p>
        <p class="year">{{ year }}</p>
        <button class="close-btn" @click="close($event)">X</button>
    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    props: {
        make: {
            type: String,
            default: ''
        },
        model: {
            type: String,
            default: ''
        },
        year: {
            type: String,
            default: ''
        }
    },
    methods: {
        close($event) {
            const id = parseInt($event.currentTarget.parentNode.dataset.id);
            this.$emit('closeCard', id);
        }
    }
}
</script>

<style lang="scss" scoped>
    .car-card {
        padding: 35px;
        border-radius: 5px;
        position: relative;
        box-shadow: 10px 10px 30px 0px rgba(209,209,209,1);
    }
    .make {
        text-transform: uppercase;
    }
    .model {
        font-size: 16px;
    }
    .year {
        font-size: 20px;
    }

    .close-btn {
        position: absolute;
        top: 25px;
        right: 25px;
        color: red;
        background: transparent;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
            color: white;
            background: red;
        }
    }
</style>