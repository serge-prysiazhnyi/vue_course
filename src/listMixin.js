import _ from 'lodash';

export default {
    data() {
        return {
            searchName: '',
            cities: [
                {
                    id: _.uniqueId(),
                    name: 'New York'
                },
                {
                    id: _.uniqueId(),
                    name: 'Tokyo'
                },
                {
                    id: _.uniqueId(),
                    name: 'Jakarta'
                },
                {
                    id: _.uniqueId(),
                    name: 'Shanghai'
                },
            ]
        }
    },
    computed: {
        filteredNames() {
            return this.cities.filter((city) => {
                // capitalize all words
                const searchName = this.searchName.replace(/\b\w/g, l => l.toUpperCase());
                return city.name.indexOf(searchName) != -1;
            });
        }
    }
}