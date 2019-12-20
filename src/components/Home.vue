<template>
    <div>
        <v-container fluid>
            <v-row xs="12">
                <v-carousel>
                    <v-carousel-item
                    v-for="(ad,i) in ads"
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
                                color="orange"
                                text
                                :to="'/ad/' + ad.id"
                            >
                                Open
                            </v-btn>

                            <v-btn
                                color="primary"
                                text
                            >
                                Buy
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
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
                {
                    title: 'Second ad',
                    desc: 'lorem',
                    promo: false,
                    imageSrc: 'https://images.unsplash.com/photo-1575149536487-4c9ac49fc258?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
                    id: '2'
                },
                {
                    title: 'Third ad',
                    desc: 'lorem',
                    promo: false,
                    imageSrc: 'https://images.unsplash.com/photo-1538097304804-2a1b932466a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjI0MX0&auto=format&fit=crop&w=1650&q=80',
                    id: '3'
                },
                {
                    title: 'Fourth ad',
                    desc: 'lorem',
                    promo: false,
                    imageSrc: 'https://images.unsplash.com/photo-1576807126558-7d2fcb6f6180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
                    id: '4'
                },
            ]
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