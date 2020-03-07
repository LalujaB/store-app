import Vue from 'vue'
import VueRouter from 'vue-router';
import AppCustomers from './components/AppCustomers';
import AppProducts from './components/AppProducts';
import AppLatestPurchases from './components/AppLatestPurchases'

Vue.use(VueRouter);

export default new VueRouter ({
    mode: 'history',
    routes:[
    {path: '/', redirect: '/customers'},
    { path: '/customers', component: AppCustomers },
    { path: '/products', component: AppProducts },
    {path: '/customers/:id', name: 'latest-purchases', component: AppLatestPurchases, props: true},
        ]
})


