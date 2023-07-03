
import style from "@/style/layouts/layouts.module.scss"
import React, { useState} from "react";
import logo from "@/assets/images/react.svg"
interface SettingsProp{
    colorPrimary: string;
    layout: 'side' | 'top';
    contentWidth: 'Fluid' | 'Fixed';
    fixedHeader: boolean;
    fixSiderbar: boolean;
    logo: React.ReactElement | React.Component | undefined,
    title: string;
}

const Layouts = () => {

    const [setting, setSetting] =  useState<Partial<SettingsProp> | undefined>({
        colorPrimary:'',
        layout:'side',
        contentWidth:'Fluid',
        fixedHeader:false,
        fixSiderbar:true,
        title:"你好Title",
        logo:<img src={logo} alt="not"/>
    })


    return(
        <>
            <div className={style['layout']}>

            </div>
        </>
    )
};

export default Layouts;