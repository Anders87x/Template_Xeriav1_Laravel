
require('./bootstrap');

window.Vue = require('vue');

Vue.component('buttons', require('./components/ButtonsComponent.vue').default);
Vue.component('cards', require('./components/CardsComponent.vue').default);
Vue.component('tabs', require('./components/TabsComponent.vue').default);

const app = new Vue({
    el: '#app',
    data :{
        menu:0
    }
});
