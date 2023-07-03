
import { AuthRoute } from '@/router/guard/AuthRoute'
import {createBrowserRouter, RouteObject} from "react-router-dom";
import React, {lazy, Suspense} from "react";
import Layouts from "@/views/layouts";


/*扩展*/
type RouterObjectWith =  RouteObject & {
    meta?: { title?: string }
}
/*懒加载*/
const lazyLoad = (Comp:React.LazyExoticComponent<any>):React.ReactNode => {
    // const Comp = React.lazy(() => import(`${compName}`));
    return(
        <Suspense fallback={<div>加载中</div>}>
            <Comp />
        </Suspense>
    )
}

const router = createBrowserRouter([
    {
        path:"/login",
        element:lazyLoad(lazy(()=>import("@/views/login")))
    },
    {
        path:"*",
        element:<div>404</div>
    },
    {
        path: "/",
        element: <AuthRoute><Layouts/></AuthRoute>,
        meta:{
            title:'首页'
        },
        children:[
            {
                path: "",
                element: <div>DashLoad</div>,
            },

        ]
    },

] as RouterObjectWith[]);

export default router;