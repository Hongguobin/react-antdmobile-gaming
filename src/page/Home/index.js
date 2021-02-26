import React from 'react';
import './index.css'
// React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序

function Home() {
    return (
        <div className="home">首页</div>
    )
}
export default Home