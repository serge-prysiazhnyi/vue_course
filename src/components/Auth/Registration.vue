<template>
    <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="6"
          >
            <v-card class="elevation-8">
              <v-toolbar
                color="red"
                dark
                flat
              >
                <v-toolbar-title>Registration form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" :lazy-validation="true" v-model="valid">
                  <v-text-field
                    :rules="emailRules"
                    required
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="email"
                    v-model="email"
                  />

                  <v-text-field
                    :rules="passwordRules"
                    required
                    :counter="8"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                  <v-text-field
                    :rules="confirmPasswordRules"
                    required
                    :counter="8"
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                    prepend-icon="lock"
                    type="password"
                    v-model="confirmPassword"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                    color="success"
                    dark 
                    @click="onSubmit" 
                    :loading="loading"
                    :disabled="loading || !valid"
                >Create account</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
    data() {
        return {
            email: '',
            password: '',
            confirmPassword: '',
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length > 8 || 'Password must be equal or more than 8 characters',
            ],
            confirmPasswordRules: [
                v => !!v || 'Password is required',
                v => v === this.password || 'Passwords should match'
            ]
        }
    },
    computed: {
      loading() {
        return this.$store.getters.getLoading;
      }
    },
    methods: {
        onSubmit() {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                }
                this.$store.dispatch('registerUser', user)
                  .then(()=>{
                    this.$router.push('/')
                  })
                  .catch((error)=> console.log(error))
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>