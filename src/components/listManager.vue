<template>
    <div class="list-manager-wr">
        <div class="input-wr">
            <label for="make" placeholder="make">Make</label>
            <input type="text" name='make' v-model="name">
        </div>
        <div class="input-wr">
            <label for="model" placeholder="model">Model</label>
            <input type="text" name='model' v-model="model">
        </div>
        <div class="input-wr">
            <label for="year" placeholder="year">Year</label>
            <input type="text" name='year' v-model="year">
        </div>
        <div class="btn-wr">
            <button class="submit" @click="submit" href="#">Add</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    data() {
        return {
            name: '',
            model: '',
            year: '',
            id: 100
        }
    },
    props: {
        'add-car': {
            type: Function
        }
    },
    methods: {
        submit() {
            this.id++;
            this.$emit('add-car', this.name, this.model, this.year, this.id);
        }
    },
    // watch: {
        
    // },
}
/* eslint-enable no-console */
</script>

<style lang="scss" scoped>
    .list-manager-wr {
        width: 50%;
        margin: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .input-wr {
            margin-top: 25px;
            width: 100%;
            max-width: 320px;
            display: flex;
            flex-direction: column;

            input {
                margin-top: 10px;
                padding: 10px;
                border: 1px solid gray;
                border-radius: 5px;
            }
        }
        .btn-wr {
            margin-top: 25px;
            max-width: 320px;

            .submit {
                border: none;
                padding: 10px;
                border-radius: 5px;
                color: #ffffff;
                background: red;
            }
        }
    }
</style>