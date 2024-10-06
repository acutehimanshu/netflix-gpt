import React, { useEffect, useState } from 'react'
import Logo from '../images/logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { onAuthStateChanged, signOut } from "firebase/auth";
import { firebaseAuth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import USERIMAGE from '../images/netflix-user.jpg'
const Header = ({isLogin}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userInfo = useSelector((store)=>store.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = ()=>{
    signOut(firebaseAuth).then(() => {
      // dispatch(removeUser());
    }).catch((error) => {
      console.log("unable to logout");
    });
  }

  useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(firebaseAuth, (user)=>{
          if(user){
              const {uid, email, displayName, photoURL } = firebaseAuth.currentUser;
              dispatch(
                  addUser({
                      uid:uid,
                      name:displayName,
                      email:email,
                      profile:photoURL
                  })
              );
              navigate("/browse");
          }else{
              dispatch(removeUser());
              navigate("/");
          }
      })
      return ()=> unsubscribe();
  },[]);


  const widthHeader = isLogin ? "w-full":"w-3/4";
  return (
    <div className={"absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black left-0 right-0 z-10 mx-auto "+widthHeader}>
      <img 
        className="w-44"
        src={Logo}
        alt="Logo"
      />
      <div className="items-center relative">
        {isLogin && 
          <ul className="flex text-white mt-5">
            <li className="flex items-center">
              Welcome {(userInfo && userInfo.name !== null) ? userInfo.name : 'User'} 
              <img 
                src={(userInfo && userInfo.profile !== null) ? userInfo.profile : USERIMAGE} 
                className="w-8 h-8 mx-2 cursor-pointer"
                alt="Profile"
                onClick={toggleDropdown} 
              />
            </li>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-20">
                <ul className="py-1">
                  <li 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {/* Navigate to Profile Page */}}
                  >
                    Profile
                  </li>
                  <li 
                    className="px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </ul>
        }
      </div>
    </div>
  )
}

export default Header