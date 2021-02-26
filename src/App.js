import './App.scss'
import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Icon from './components/iconfont'
import Home from './page/Home'
import Col from './page/Col'
import Cart from './page/Cart'
import Login from './page/Login'

const tabbarArr = [
  {
    img: 'zu5',
    text: '首页',
    path: '/home',
    component: Home,
    exact: true,
    color: '#000'
  },
  {
    img: 'zu5',
    text: '分类',
    exact: false,
    component: Col,
    path: '/col',
    color: '#000'
  },
  {
    img: 'zu5',
    text: '购物车',
    component: Cart,
    exact: false,
    path: '/cart',
    color: '#000'
  },
  {
    img: 'zu5',
    text: '用户',
    component: Login,
    exact: false,
    path: '/login',
    color: '#000'
  }
]

function App() {
  return (
    <Router>
      <div className="app">
        <div className="app__panel">
          {tabbarArr.map((item, index) => {
            return (
              <Route
                key={index}
                exact={item.exact}
                path={item.path}
                component={item.component}
              ></Route>
            )
          })}
        </div>
        <div className="app__tabbar">
          {tabbarArr.map((item, index) => {
            return (
              <Link to={item.path} key={index} className="tabItem">
                <Icon name={item.img} size={18} color={item.color}></Icon>
                <p>{item.text}</p>
              </Link>
            )
          })}
        </div>
      </div>
    </Router>
  )
}

export default App
