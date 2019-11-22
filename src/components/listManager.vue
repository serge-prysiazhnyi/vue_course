<template>
    <div class="list-manager-wr">
        <div class="input-wr">
            <label for="name" placeholder="name">Name</label>
            <input type="text" name='name' v-model="name">
        </div>
        <div class="input-wr">
            <label for="desc" placeholder="desc">Description</label>
            <input type="text" name='desc' v-model="desc">
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
export default {
    data() {
        return {
            name: '',
            desc: '',
            year: ''
        }
    },
    props: {
        addCar: {
            type: Function
        }
    },
    methods: {
        submit() {
            /* eslint-disable no-console */
            console.log('child click');
            /* eslint-enable no-console */
            this.$emit('addCar', this.name, this.desc, this.year);
        }
    },
    watch: {
        
    },
}
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