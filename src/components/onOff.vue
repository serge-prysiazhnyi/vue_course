<template>
    <div class="container">
        <h3>{{ value === true ? 'enabled':'disabled' }}</h3>
        <button 
            class="on"
            :class="{'active': value}"
            @click="onClick(true)"
        >ON</button>
        <button 
            class="off"
            :class="{'active': !value}"
            @click="onClick(false)"
        >OFF</button>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        onClick(newValue) {
            this.$emit('input', newValue);
        }
    }
    // data() {
    //     return {
    //         enabled: false
    //     }
    // }
}
</script>

<style lang="scss">
    button {
        color: #000;
        background: #ffffff;
        border: 1px solid #000;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }

        &.on {
            margin-right: 5px;

            &.active {
                color: white;
                background: green;
                border: 1px solid green;
            }
        }

        &.off {
            &.active {
                color: white;
                background: red;
                border: 1px solid red;
            }
        }
    }
</style>