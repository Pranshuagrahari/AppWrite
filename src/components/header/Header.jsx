import React from 'react';
import { useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { useSelector } from 'react-redux';
import {Container,Logo,LogoutBtn} from '../index'

function Header() {
    const navigate=useNavigate();
    const authStatus=useSelector((state)=>state.status)
    const navItems=[
        {
            name: 'Home',
            slug: "/",
            active: true
          }, 
          {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        },
    ]
    return ( 
        <header>
            <Container>
                <nav className='flex'>
                    <div className='mr-4'>
                        <Link to='/'>
                            <Logo width='70px'/>
                        </Link>
                    </div>
                    <ul className='flex ml-auto'>
                        {navItems.map((item)=>item.active ? (
                            <li key={item.name}>
                                <button 
                                className='inline-bock px-6 py-2 duration-200 hover:bg-black rounded-full font-extrabold text-purple-300'
                                onClick={()=>navigate(item.slug)}
                                >{item.name}</button>
                            </li>
                        ):null)}
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
     );
}

export default Header;