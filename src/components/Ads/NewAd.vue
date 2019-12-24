<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <h1 class="grey--text text--darken-2 mb-3">Create New ad</h1>
                <v-form ref="form" v-model="valid">
                  <v-text-field
                    :rules="[v => !!v || 'required!']"
                    required
                    label="Add title"
                    name="title"
                    type="text"
                    v-model="title"
                  />

                  <v-textarea
                    :rules="[v => !!v || 'required!']"
                    required
                    label="Description"
                    name="description"
                    type="text"
                    multi-line
                    v-model="description"
                  ></v-textarea>
                </v-form>
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12">
                <v-btn
                    rounded 
                    color="primary" 
                    dark
                >
                    Upload image
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>
                
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12">
                <img src="https://images.unsplash.com/photo-1576807126558-7d2fcb6f6180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" height="150">
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12">
                <v-switch
                    v-model="promo"
                    label="Add to promo"
                ></v-switch>
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12">
                <v-spacer></v-spacer>
                <v-btn 
                    rounded 
                    color="success" 
                    dark
                    @click="createAd"
                    :disabled="!valid"
                >
                    Create ad
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
    data() {
        return {
            title: '',
            description: '',
            promo: false,
            valid: false
        }
    },
    methods: {
        createAd() {
            if(this.$refs.form.validate()) {
                const ad = {
                    title: this.title,
                    desc: this.description,
                    promo: this.promo,
                    imageSrc: 'https://images.unsplash.com/photo-1555796861-b29396df890e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                }

                console.log(ad);

                this.$store.dispatch('createAd', ad);
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>