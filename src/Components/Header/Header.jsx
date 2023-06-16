import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { PRODUCT_CART, USER_LOGIN, USER_PROFILE, clearStorage } from '../../Util/config';

const Header = (props) => {
    const navigate = useNavigate();
    let {number} = props;
    const {userLogin} = useSelector(state => state.userReducer);
    const renderLoginLink = () => {
        if(userLogin.email !== '') {
            return <>
                <i className="fa fa-user icon-orange px-2"></i>
                <NavLink to="/profile" className="text-dark text-hover px-2">{userLogin.email}</NavLink>
                <span style={{cursor:'pointer'}} className='text-dark bd-text text-hover px-2' onClick={()=>{
                    clearStorage(USER_LOGIN);
                    clearStorage(USER_PROFILE);
                    clearStorage(PRODUCT_CART);
                    navigate('/login');
                    window.location.reload();
                }}>Logout</span>
            </>
        }
        return <>
            <i className="fa fa-user icon-orange px-2"></i>
            <NavLink to="/login" className="text-dark text-hover px-2">Login</NavLink>
            <NavLink to="/register" className="text-dark bd-text text-hover px-2">Register</NavLink>
        </>
    }

  return (
    <div className='header'>
        <div className='header-top bg-header-top'>
            <div className='container d-flex px-0 py-2 justify-content-between align-items-center'>
                <p className='m-0'>World Wide Completely Free Returns and Free Shipping</p>
                <div className='account'>
                    {renderLoginLink()}
                </div>
            </div>
        </div>
        <div className='header-mid pt-4 pb-3'>
            <div className='container d-flex px-0 justify-content-between align-items-center'>
                <div className='header-mid-left'>
                    <h2 className='logo'>Shoes</h2>
                </div>
                <div className='header-mid-right d-flex'>
                    <NavLink to="/search"><i className="fa fa-search fs-icon px-2"></i></NavLink>
                    <div className='cart position-relative'>
                        <NavLink to="/cart"><i className="fa fa-shopping-cart fs-icon px-2"></i></NavLink>
                        <span className='position-absolute count'>{number}</span>
                    </div>
                </div>
            </div>
        </div>
        <div className='header-bot'>
            <div className='container bg-orange bdr-header p-3'>
                <ul className='d-flex m-0 justify-content-center'>
                    <li><NavLink to='/' className={({ isActive }) =>isActive ? "px-4 text-active" : "px-4 text-white menu"}>HOME</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">MEN</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">WOMEN</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">KID</NavLink></li>
                    <li><NavLink to='/' className="px-4 text-white menu">SPORT</NavLink></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header