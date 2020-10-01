import React from 'react';
import HomePage from './page/Homepage/HomePage';
import NotFound from './page/NotFoundPage/NotFound';
import ProductListPage from './page/ProductListPage/ProductListPage';
import ProductActionPage from './page/ProductActionPage/ProductActionPage';
const routes = [
    {
        path:'/',
        exact:true,
        main:()=><HomePage/>
    },
    {
        path:'/product-list',
        exact:false,
        main:()=><ProductListPage/>
    },
    {
        path:'/product/add',
        exact:false,
        main:()=><ProductActionPage/>
    },
    {
        path:'/product/:id/edit',
        exact:false,
        main:({match})=><ProductActionPage math = {match}/>
    },
    {
        path:'',
        exact:false,
        main:()=><NotFound/>
    }
]

export default routes;