<template >
    <v-dialog v-model="modal" width="500">
        <template v-slot:activator="{ on }">
            <v-btn color="primary" dark v-on="on">Edit</v-btn>
        </template>

        <v-card class="d-flex xs-12">
            <v-container>
                <v-card-title class="headline">
                    <h1 class="text--primary">Edit ad</h1>
                </v-card-title>
                <v-text-field
                    label="Title"
                    name="title"
                    type="text"
                    v-model="editedTitle"
                />
                <v-text-field
                    label="description"
                    name="Description"
                    type="text"
                    v-model="editedDescription"
                />
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                        rounded 
                        color="indigo darken-4"
                        @click="onCancel"
                    >
                        Cancel
                    </v-btn>

                    <v-btn
                        color="orange darken-4"
                        rounded
                        @click="onSave"
                    >
                        Save
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
            editedTitle: this.ad.title,
            editedDescription: this.ad.description
        }
    },
    methods: {
        onCancel() {
            this.modal = false;
            this.editedTitle = this.ad.title;
            this.editedDescription = this.ad.description;
        },
        onSave() {
            if(this.editedTitle != '' && this.editedDescription != '') {
                this.$store.dispatch('updateAd', {
                    title: this.editedTitle,
                    description: this.editedDescription,
                    id: this.ad.id
                });

                this.modal = false;
            }
        }
    }
}
</script>