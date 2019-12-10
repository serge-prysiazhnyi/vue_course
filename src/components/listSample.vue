<template>
    <div class="sample-list">
        <input type="text" v-model="searchName">
        <ul>
            <li :key="item.id" v-for="item in filteredNames">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
/* eslint-disable no-console */
import ListMixin from '../listMixin';

export default {
    mixins: [ListMixin]
}
</script>

<style lang="scss">
    .sample-list {
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        align-items: center;

        input {
            max-width: 320px;
        }

        ul {
            list-style: none;
            padding-left: 0;

            li {
                margin-top: 10px;
            }
        }
    }
</style>