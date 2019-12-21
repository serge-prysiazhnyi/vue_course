<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <h1 class="grey--text text--darken-2 mb-3">Ad list</h1>

                <v-card 
                    class="elevation-8 mb-5"
                    v-for="ad in ads"
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
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            ads: [
                {
                    title: 'First ad',
                    desc: 'lorem',
                    promo: false,
                    imageSrc: 'https://images.unsplash.com/photo-1575138312433-d42e9f176f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    id: '1'
                },
            ]
        }
    }
}
</script>

<style lang="scss">
    
</style>