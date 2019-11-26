<template>
    <div class="car-card">
        <h4 class="make">{{ make | uppercase }}</h4>
        <h5 class="model">{{ model | uppercase }}</h5>
        <p class="year">{{ year }}</p>
        <button class="btn-delete" @click="deleteCarCard">X</button>
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
        deleteCarCard(e) {
            this.$emit('delete-car-card', e.target.parentElement.dataset.id);
        }
    },
    // filters: {
    //     uppercase(value) {
    //         return value.toUpperCase();
    //     }
    // }
}
/* eslint-enable no-console */

</script>

<style lang="scss" scoped>
    .car-card {
        position: relative;
        padding: 40px;
        border-radius: 25px;
        box-shadow: 5px 5px 35px 0px rgba(186,186,186,1);

    }
    .make {
        // text-transform: uppercase;
    }
    .model {
        font-size: 16px;
    }
    .year {
        font-size: 20px;
    }
    .btn-delete {
        position: absolute;
        top: 15px;
        right: 15px;
        padding: 5px;
        color: #ffffff;
        background-color: red;
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }
</style>