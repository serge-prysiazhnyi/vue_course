<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <h1>Ad</h1>
                <v-card v-if="!loading">
                    <v-row>
                        <v-col md="3" sm="4" xs="6">
                            <v-avatar class="ma-3" size="240" tile>
                                <v-img :src="ad.imageSrc"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col md="9" sm="8" xs="6">
                            <v-card-text>
                                <h2>{{ad.title}}</h2>
                                <p>{{ad.description}}</p>
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <addEditAdModal :ad="ad"></addEditAdModal>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
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
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
/* eslint-disable no-console */
import EditAdModal from './EditAdModal';

export default {
    components: {
        addEditAdModal: EditAdModal
    },
    props: ['id'],
    computed: {
        ad () {
            const id = this.id;
            return this.$store.getters.getAdById(id);
        },
        loading() {
            return this.$store.getters.getLoading;
        }
    },
}
</script>

<style lang="scss">
    
</style>