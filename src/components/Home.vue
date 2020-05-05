<template>
    <div v-if="!loading">
        <v-container fluid>
            <v-row xs="12">
                <v-carousel>
                    <v-carousel-item
                    v-for="(ad,i) in promoAds"
                    :key="i"
                    :src="ad.imageSrc"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                    >
                        <div class="carousel-link">
                            <v-btn class="error" :to="'/ad/' + ad.id">{{ad.title}}</v-btn>
                        </div>
                    </v-carousel-item>
                </v-carousel>
            </v-row>
        </v-container>
        <v-container grid-list-lg>
            <v-row xs="12">
                <v-col 
                    xs="12"
                    sm="6"
                    md="4"
                    v-for="ad in ads"
                    :key="ad.id"
                >
                    <v-card
                        class="mx-auto"
                        max-width="400"
                    >
                        <v-img
                        class="white--text align-end"
                        height="200px"
                        :src="ad.imageSrc"
                        >
                        <v-card-title>{{ad.title}}</v-card-title>
                        </v-img>

                        <v-card-text class="text--primary">
                        <div>{{ad.desc}}</div>

                        </v-card-text>

                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                                class="mr-3"
                                color="orange"
                                :to="'/ad/' + ad.id"
                            >
                                Open
                            </v-btn>
                            <app-buy-modal :ad="ad"></app-buy-modal>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
    <div v-else>
        <v-container fluid>
            <v-row xs="12">
                <v-col>
                    <div class="text-center">
                        <v-progress-circular indeterminate></v-progress-circular>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    computed: {
        ads() {
            return this.$store.getters.getAds;
        },
        promoAds() {
            return this.$store.getters.getPromoAds;
        },
        loading() {
            return this.$store.getters.getLoading;
        }
    }
}
</script>

<style lang="scss">
    .carousel-link {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0,0,0, .5);
        transform: translate(-50%,0);
        padding: 5px 15px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
    }
</style>