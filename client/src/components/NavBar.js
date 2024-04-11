import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { logout } from '../redux/authSlices';


const NavBar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    let isLogin = useSelector(state => state.authSlice.isLogin)
    isLogin = isLogin || localStorage.getItem('userId')

    const handleLogout = () => {
        try {
            dispatch(logout())
            alert("Logout successfully")
            localStorage.clear()

        } catch (error) {
            console.log(error)
        } finally {
            navigate("/login")
        }
    }

    // const [value, setValue] = useState([])
    return (
        <>
            <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
                <Link className="font-bold text-xl tracking-tight" to="/">Blog App</Link>
                {isLogin && <div>
                    <nav className="flex flex-col sm:flex-row">
                        <button onClick={() => navigate("/")} className="text-gray-600 px-6  hover:text-white focus:outline-none">
                            Blogs
                        </button><button onClick={() => navigate("/my-blog")} className="text-gray-600  px-6  hover:text-white focus:outline-none">
                            My Blogs
                        </button>
                        <button onClick={() => navigate("/create-blog")} className="text-gray-600  px-6  hover:text-white focus:outline-none">
                            Create Blogs
                        </button>
                    </nav>
                </div>}
                <div className="flex items-center">
                    {!isLogin && (<>
                        {/* <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/">Home</Link> */}
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/login">Login</Link>
                        <Link className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" to="/register">Register</Link>
                    </>)}
                    {isLogin &&
                        <button className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700" onClick={handleLogout}>logout</button>
                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar
