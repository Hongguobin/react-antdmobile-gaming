
import React from 'react'
import Icon from '../iconfont'
import { Link } from "react-router-dom";
import './index.scss'

const tabbarArr = [

    {
        img: 'zu5',
        text: '首页',
        path: "./home",
        color: '#000'
    },
    {
        img: 'zu5',
        text: '分类',
        path: "./col",
        color: '#000'
    },
    {
        img: 'zu5',
        text: '购物车',
        path: "./cart",
        color: '#000'
    },
    {
        img: 'zu5',
        text: '用户',
        path: "./login",
        color: '#000'
    },
]


const Tabbar = () => {
    return (
        <>
            <div className="tabbar">
                {
                    tabbarArr.map((item, key) => {
                        return (
                            <Link to={item.path} className="tabItem">
                                <Icon name={item.img} size={18} color={item.color}></Icon>
                                <p>{item.text}</p>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Tabbar
