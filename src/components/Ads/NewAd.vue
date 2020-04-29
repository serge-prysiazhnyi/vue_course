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
                    @click="triggerUpload"
                >
                    Upload image
                    <v-icon right dark>mdi-cloud-upload</v-icon>
                </v-btn>
                <input 
                    ref="fileInput" 
                    type="file" 
                    style="display:none" 
                    accept="image/*"
                    @change="onFileChange"
                >
            </v-col>
        </v-row>
        <v-row>
            <v-col xs="12">
                <img :src="imageSrc" v-if="imageSrc">

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
                    :loading='loading'
                    rounded 
                    color="success" 
                    dark
                    @click="createAd"
                    :disabled="(!valid || !image) || loading"
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
            valid: false,
            image: null,
            imageSrc: ''
        }
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading;
        }
    },
    methods: {
        createAd() {
            if(this.$refs.form.validate() && this.image) {
                const ad = {
                    title: this.title,
                    description: this.description,
                    promo: this.promo,
                    image: this.image
                }

                this.$store.dispatch('createAd', ad)
                .then(() => {
                    this.$router.push('/list')
                })
                .catch(() => {

                });
            }
        },
        triggerUpload() {
            this.$refs.fileInput.click();
        },
        onFileChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                this.imageSrc = reader.result;
            }
            this.image = file;
            reader.readAsDataURL(file);
        }
    }
}
</script>

<style lang="scss">
    img {
        width: 100%;
        max-width: 600px;
        height: auto;
    }
</style>