// 官方的元件
import Vue from 'vue';
import VueRouter from 'vue-router';


//自訂的分頁元件
import Home from '@/components/HelloWorld';
import Page from '@/components/pages/page';

import Child from '@/components/pages/child';
import Child2 from '@/components/pages/child2';
import Child3 from '@/components/pages/child3';
//啟用
Vue.use(VueRouter);


export default new VueRouter({    
    routes:[
        {
            name: '首頁', // 元件會呈現的名稱
            path: '/index', // 虛擬的路徑
            component: Home, // 對應的元件
        },
        {
            name: '分頁', // 元件會呈現的名稱
            path: '/page', // 虛擬的路徑
            component: Page, // 對應的元件
            children:[
                {
                    name: '卡片 1', // 元件會呈現的名稱
                    path: '', // 沒輸入表示預設
                    component: Child, // 對應的元件
                },
                {
                    name: '卡片 2', // 元件會呈現的名稱
                    path: 'Child2', // 虛擬的路徑
                    component: Child2, // 對應的元件
                },
                {
                    name: '卡片 3', // 元件會呈現的名稱
                    path: 'Child3', // 虛擬的路徑
                    component: Child3, // 對應的元件
                },
            ],
        },
    ]
});