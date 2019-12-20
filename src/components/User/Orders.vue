<template>
    <v-container>
        <v-row>
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
                                    @click="toggleOrder(order)"
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
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            orders: [
                {
                    id: '1',
                    name: 'first order',
                    phone: '8-921-121-12-42',
                    adId: '1',
                    done: false
                },
                {
                    id: '2',
                    name: 'second order',
                    phone: '8-921-142-42-42',
                    adId: '2',
                    done: false
                }
            ]
        }
    },
    methods: {
        toggleOrder(order) {
            order.done = true;
        }
    }
}
</script>

<style lang="scss">
    
</style>