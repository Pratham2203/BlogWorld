import React,{ useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/auth'
import {login,logout} from './store/authSlice'
import { Header } from './components'
import { Footer } from './components'
import { Outlet } from 'react-router-dom'
import appwriteService from "./appwrite/config";
import {addPosts} from './store/postSlice'
import { Spinner } from '@nextui-org/react'
function App() {
  const [loading, setLoading] = useState(true)
  const [allPosts,setAllPosts] = useState([])
  const dispatch=useDispatch()
  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  async () => {
    const posts = appwriteService.getPosts([]);
    if (posts) {
      setAllPosts(posts);
    }
  };
  dispatch(addPosts(allPosts));
  return !loading? (
      <div className="min-h-screen flex flex-wrap content-between bg-gray-100">
      <div className="w-full block relative ">
        <Header />
        <main className="min-h-screen flex align-middle justify-center py-20">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div className=" w-full h-screen grid items-center ">
      <div className="m-auto">
        <Spinner size="lg" />
      </div>
    </div>
    );
}

export default App
