<template >
    <v-dialog v-model="modal" width="500">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Buy</v-btn>
        </template>

        <v-card class="d-flex xs-12">
            <v-container>
                <v-card-title class="headline">
                    <h3 class="text--primary">Do you want to buy it?</h3>
                </v-card-title>
                <v-text-field
                    label="Your name"
                    name="name"
                    type="text"
                    v-model="name"
                />
                <v-text-field
                    label="Your phone"
                    name="phone"
                    type="text"
                    v-model="phone"
                />
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        rounded 
                        color="indigo darken-4"
                        @click="onCancel"
                        :disabled="localLoading"
                    >
                        Close
                    </v-btn>

                    <v-btn
                        color="orange darken-4"
                        rounded
                        @click="onSave"
                        :disabled="localLoading"
                        :loading="localLoading"
                    >
                        Buy
                    </v-btn>
                </v-card-actions>
            </v-container>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ['ad'],
    data () {
        return {
            modal: false,
            name: '',
            phone: '',
            localLoading: false
        }
    },
    methods: {
        onCancel() {
            this.modal = false;
            this.name = '';
            this.phone = '';
        },
        onSave() {
            if(this.name != '' && this.phone != '') {
                this.localLoading = true;
                this.$store.dispatch('createOrder', {
                    name: this.name,
                    phone: this.phone,
                    adId: this.ad.id,
                    ownerId: this.ad.ownerId
                })
                .finally(() => {
                    this.name = '';
                    this.phone = '';
                    this.localLoading = false;
                    this.modal = false;
                }) 
            }
        }
    }
}
</script>