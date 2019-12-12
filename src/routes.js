import VueRouter from 'vue-router';
import Home from './components/pages/home';
import Cars from './components/pages/cars';
import Car from './components/pages/car';
import CarFull from './components/pages/carFull';

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
            component: Car,
            children: [
                {
                    path: 'full',
                    component: CarFull,
                    name: 'CarFull'
                }
            ]
        }
    ],
    mode: 'history'
})