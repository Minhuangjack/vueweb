// 官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';


//自訂的分頁元件
import Home from '@/components/HelloWorld';

//啟用
Vue.use(VueRouter);


export default new VueRouter({    
    routes:[
        {
            name: '首頁', // 元件會呈現的名稱
            path: '/index', // 虛擬的路徑
            component: Home, // 對應的元件
        },
    ]
});