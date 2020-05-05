<template>
    <v-container>
        <v-row v-if="!loading && myAds.length != 0">
            <v-col xs="12">
                <h1 class="grey--text text--darken-2 mb-3">Ad list</h1>

                <v-card 
                    class="elevation-8 mb-5"
                    v-for="ad in myAds"
                    :key="ad.id"
                >
                    <v-row>
                        <v-col md="2" sm="4" xs="6">
                            <v-avatar 
                                class="ma-3"
                                size="125"
                                tile
                            >
                                <v-img :src="ad.imageSrc"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col md="10" sm="8" xs="6">
                            <v-card-text>
                                <h2>{{ad.title}}</h2>
                                <p>{{ad.desc}}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn class="info" :to="'/ad/' + ad.id">Open</v-btn>
                            </v-card-actions>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
        <v-row xs="12" v-else-if="!loading && myAds.length === 0">
            <v-col>
                <h1>
                    You have no ads
                </h1>
            </v-col>
        </v-row>
        <v-row xs="12" v-else>
            <v-col>
                <div class="text-center">
                    <v-progress-circular indeterminate></v-progress-circular>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable no-console */
export default {
    data() {
        return {
            
        }
    },
    computed: {
        myAds() {
            return this.$store.getters.getMyAds;
        },
        loading() {
            return this.$store.getters.getLoading;
        }
    }
}
</script>

<style lang="scss">
    
</style>