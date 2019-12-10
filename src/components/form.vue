<template>
    <div class="container">
        <form action="" class="custom-form">
            <h3>Title</h3>
            <label for="text">some label</label>
            <input type="text" name="text" v-model.lazy="message">
            <textarea name="" id="" cols="30" rows="10" v-model="textarea"></textarea>
            <hr>
            <p>{{ textarea }}</p>
            <hr>
            <div class="input-wr">
                <label for="fb">
                    <input type="checkbox" name="fb" id="fb" value="fb" v-model="social">
                    facebook
                </label>
                <label for="twitter">
                    <input type="checkbox" name="twitter" id="twitter" value="twitter" v-model="social">
                    twitter
                </label>
                <label for="instagram">
                    <input type="checkbox" name="instagram" id="instagram" value="instagram" v-model="social">
                    instagram
                </label>
                <hr>
                <ul>
                    <li :key="i" v-for="(s, i) in social">{{s}}</li>
                </ul>
            </div>
            <hr>
            <div class="input-wr">
                <label for="fb-r">
                    <input type="radio" name="fb-r" id="fb" value="fb" v-model="radio">
                    facebook
                </label>
                <label for="twitter-r">
                    <input type="radio" name="twitter-r" id="twitter" value="twitter" v-model="radio">
                    twitter
                </label>
                <label for="instagram-r">
                    <input type="radio" name="instagram-r" id="instagram" value="instagram" v-model="radio">
                    instagram
                </label>
            </div>
            <div class="input-wr">
                <select name="city" id="selectCity" v-model="selectedCity">
                    <option 
                        :key="i" 
                        v-for="(s, i) in cities"
                    >{{s}}</option>
                </select>
                <p>Selected city: {{ selectedCity }}</p>
            </div>
            <div class="input-wr">
                <label for="age">Age:</label>
                <input type="text" name="age" v-model.number="age"> 
            </div>
        </form>
    </div>
</template>

<script>
/* eslint-disable no-console */
export default {
    data() {
        return {
            message: '',
            textarea: '',
            social: [],
            radio: [],
            cities: ['New York', 'Tokyo', 'Jakarta', 'Shanghai'],
            selectedCity: 'Tokyo',
            age: 20
        }
    },
    watch: {
        age(value) {
            console.log(value);
        }
    },
}
</script>

<style lang="scss" scoped>
    .custom-form {
        display: flex;
        flex-direction: column;
        max-width: fit-content;
        margin: auto;
    }
    hr {width: 100%;}
    input, textarea {
        margin-top: 15px;
        border: 1px solid grey;
        border-radius: 5px;

        &:focus {
            outline: none;
        }
    }
    .input-wr {
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }
</style>