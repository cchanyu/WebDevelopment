import React, { useState } from 'react'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, auth, storage } from '../firebase/firebase.config';
import { doc, setDoc } from 'firebase/firestore';

import Add from '../img/addAvatar.png';
import '../css/Register.scss';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const [err, setErr] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => { setErr(true) }, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then( async (downloadURL) => {
            // posting this to post your profile pic to cloud storage
            await updateProfile(res.user , {
              displayName,
              photoURL: downloadURL,
            });
            // posting this to allow another user to reach to you
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL
            });

            // initialiating empty list of friends to chat with
            await setDoc(doc(db, "userChats", res.user.uid), {})
            navigate("/ChatApplication/")

        });
      }
    );

    } catch (err) {
      setErr(true)
    }
  }

  return (
    <div className='register'>
      <div className='register-wrapper'>
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input style={{display:"none"}} type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='add' />
            <span>Add an Avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  )
}

export default Register