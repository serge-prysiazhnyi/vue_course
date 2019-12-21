<template>
    <v-container>
        <v-row>
            <v-col xs="12">
                <h1>Ad</h1>
                <v-card>
                    <v-row>
                        <v-col md="2" sm="4" xs="6">
                            <v-avatar class="ma-3" size="240" tile>
                                <v-img src="https://images.unsplash.com/photo-1575138312433-d42e9f176f6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"></v-img>
                            </v-avatar>
                        </v-col>
                        <v-col md="10" sm="8" xs="6">
                            <v-card-text>
                                <h2>lorem</h2>
                                <p>Lorem ipsum dolor sit amet</p>
                            </v-card-text>
                        </v-col>
                    </v-row>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="warning" flat>Edit</v-btn>
                        <v-btn class="success">Buy</v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="scss">
    
</style>