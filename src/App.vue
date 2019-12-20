<template>
  <div>
    <v-app>
      <v-navigation-drawer app right v-model="drawer">
        <v-list>
          <v-list-item
            v-for="link of links"
            :key="link.title"
            :to="link.url"
          >
            <v-list-item-icon>
              <!--  v-if="item.icon"  -->
              <v-icon>mdi-{{link.icon}}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="link.title"></v-list-item-title>
            </v-list-item-content>

          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app dark color="red darken-1">
        <v-app-bar-nav-icon class="hidden-md-and-up" @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>
          <router-link to="/" tag="button">Page title</router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn 
          icon 
          v-for="(link, id) in links" 
          :key="id" :to="link.url"
          class="hidden-sm-and-down"
        >
          <v-icon>mdi-{{link.icon}}</v-icon>
        </v-btn>

        <v-menu
          left
          bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn icon v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="n in 5"
              :key="n"
              @click="() => {}"
            >
              <v-list-item-title>Option {{ n }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <!-- Sizes your content based upon application components -->
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  export default {
    name: 'App',
    components: {

    },
    data: () => ({
      drawer: false,
      links: [
        {
          title: 'Login',
          icon: 'account-circle',
          url: '/login'
        },
        {
          title: 'Registration',
          icon: 'account-plus',
          url: '/registration'
        },
        {
          title: 'Orders',
          icon: 'cart',
          url: '/orders'
        },
        {
          title: 'New ad',
          icon: 'card-bulleted-outline',
          url: '/new'
        },
        {
          title: 'My ads',
          icon: 'bookmark-plus-outline',
          url: '/list'
        },
      ]
    }),
  };
</script>