import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
// import { } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';
import UserBlogs from './pages/UserBlogs';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './pages/BlogDetails';

function App() {
  return (

    <>
      <NavBar />
      <Routes>
        <Route path='/login' element={<Login />} />

        {/* <h1 className='text-4xl text-blue-400'>dd</h1> */}
        <Route path='/' element={<Blogs />} />
        <Route path='/create-blog' element={<CreateBlog />} />
        <Route path='/blog-details/:id' element={<BlogDetails />} />


        <Route path="/my-blog" element={<UserBlogs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />


      </Routes>
      <Footer />
    </>



  );
}

export default App;
