import VueRouter from 'vue-router';
import Home from './components/pages/home';
import Cars from './components/pages/cars';
import Car from './components/pages/car';

export default new VueRouter ({
    routes: [
        {
            path: '',
            component: Home
        },
        {
            path: '/cars',
            component: Cars
        },
        {
            path: '/car/:id',
            component: Car
        }
    ],
    mode: 'history'
})