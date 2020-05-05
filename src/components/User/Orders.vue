<template>
    <v-container>
        <v-row xs="12" v-if="loading">
            <v-col>
                <div class="text-center">
                    <v-progress-circular indeterminate></v-progress-circular>
                </div>
            </v-col>
        </v-row>
        <v-row v-else-if="!loading && orders.length != 0">
            <v-col xs="12" md="6">
                <h1>Orders</h1>
                <v-list
                    subheader
                    two-line
                    flat
                    >
                    <v-subheader>Hangout notifications</v-subheader>

                    <v-list-item-group
                        multiple
                    >
                        <v-list-item v-for="order in orders" :key="order.id">
                            <template v-slot:default="{ active, toggle }">
                                <v-list-item-action>
                                <v-checkbox
                                    :input-value="order.done"
                                    color="success"
                                    @click="markDone(order)"
                                ></v-checkbox>
                                </v-list-item-action>

                                <v-list-item-content>
                                    <v-list-item-title>{{order.name}}</v-list-item-title>
                                    <v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
                                </v-list-item-content>
                                <v-list-item-action>
                                    <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
                                </v-list-item-action>
                            </template>
                        </v-list-item>
                    </v-list-item-group>
                </v-list>
            </v-col>
        </v-row>
        <v-row v-else>
            <h3>You nave no orders</h3>
        </v-row>
    </v-container>
</template>

<script>
export default {
/* eslint-disable no-console */

    created() {
        this.$store.dispatch('fetchOrders');
    },
    computed: {
        loading() {
            return this.$store.getters.getLoading;
        },
        orders() {
            return this.$store.getters.orders;
        }
    },
    methods: {
        markDone(order) {
            this.$store.dispatch('markOrderDone', order.id)
                .then(() => {
                    order.done = true;
                })
                .catch(() => {})
        }
    }
}
</script>

<style lang="scss">
    
</style>