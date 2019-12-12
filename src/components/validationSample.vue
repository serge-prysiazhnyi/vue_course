<template>
    <form @submit.prevent="onSubmit">
        <h5>form sample</h5>
        <div class="form-group" :class="{ 'form-group--error': $v.email.$error }">
            <label for="email">email:</label>
            <input type="email" id="email" class="form-control" :class="{ 'is-invalid': $v.email.$error}" v-model.trim="$v.email.$model">
        </div>
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <label for="password">password:</label>
            <input type="password" id="password" class="form-control" :class="{ 'is-invalid': $v.password.$error}" v-model.trim="$v.password.$model">
            <div class="invalid-feedback" v-if="!$v.password.minLength">min length of password is {{ $v.password.$params.minLength.min }}</div>
        </div>
        <div class="form-group" :class="{ 'form-group--error': $v.password.$error }">
            <label for="confirmPassword">Confirm password:</label>
            <input type="password" id="confirmPassword" class="form-control" :class="{ 'is-invalid': $v.confirmPassword.$error}" v-model.trim="$v.confirmPassword.$model">
            <div class="invalid-feedback" v-if="!$v.confirmPassword.sameAs">passwords should match</div>
        </div>
        <button class="btn btn-success" type="submit" :disabled="$v.$invalid">submit</button>
    </form>
</template>

<script>
import { required, minLength, sameAs } from 'vuelidate/lib/validators'

export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: ''
        }
    },
    validations: {
        email: {
            required
        },
        password: {
            minLength: minLength(6)
        },
        confirmPassword: {
            sameAs: sameAs('password')
        }
    },
    methods: {
        onSubmit() {
            
        }
    } 
}
</script>

<style lang="scss" scoped>
    // .form-group--error {

    //     input {
    //         border-color: red;
    //     }
    // }
</style>