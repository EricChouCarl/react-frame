/*鉴权*/
import {Navigate, useLocation} from "react-router-dom";

export const AuthRoute = ({children}:any) =>{
    /*
    * token 白名单 已登录 放行，否则跳转登录页面
    * */
    const whiteList = ['/login','/404'];
    const location = useLocation()

    const isToken = true; //是否存在没过期的token(说明已经登录，直接放行)
    const isWhiteList = whiteList.indexOf(location.pathname) === -1; //true则不在白名单内

    if(isToken){
        return children;
    }else {
        if(isWhiteList){
            return <Navigate to='/login' replace />
        }
    }

    return children;
}