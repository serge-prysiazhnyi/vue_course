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
                <v-toolbar-title>Login form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form" v-model="valid">
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
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn 
                    color="success"
                    dark 
                    @click="onSubmit" 
                >Login</v-btn>
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
            valid: false,
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required',
                v => v.length > 8 || 'Password must be equal or more than 8 characters',
            ]
        }
    },
    methods: {
        onSubmit() {
            if (this.$refs.form.validate()) {
                const user = {
                    email: this.email,
                    password: this.password
                }

                console.log(user);
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>