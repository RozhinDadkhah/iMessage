import React, { useEffect } from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { selectUser, login, logout } from './features/userSlice'
import './App.css';
import Imessage from './component/Imessage';
import Login from './component/Login';
import {auth} from './firebase'

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        //user is log in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        //user is log out
        //
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">{user ? <Imessage /> : <Login />}</div>
  );
}

export default App;
