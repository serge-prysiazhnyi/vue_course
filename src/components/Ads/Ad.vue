<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <h1>Ad</h1>
                <v-card>
                    <v-row>
                        <v-col md="3" sm="4" xs="6">
                            <v-avatar class="ma-3" size="240" tile>
                                <v-img :src="ad.imageSrc"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col md="9" sm="8" xs="6">
                            <v-card-text>
                                <h2>{{ad.title}}</h2>
                                <p>{{ad.desc}}</p>
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" text>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable no-console */

export default {
    props: ['id'],
    computed: {
        ad () {
            const id = this.id;
            return this.$store.getters.getAdById(id);
        }
    }
}
</script>

<style lang="scss">
    
</style>