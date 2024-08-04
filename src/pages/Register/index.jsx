import React, {useRef} from "react";
import styles from './index.module.css';
import {useNavigate, Link} from 'react-router-dom';

function Register() {
    const usernameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const repasswordRef = useRef('');
    const navigate = useNavigate();

    function validate() {
        return true;
    }

    function handleForm(e) {
      e.preventDefault();
      const isvalid = validate()
      
      if(!isvalid) {
        return;
      }
      const user = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      fetch('https://auth-rg69.onrender.com/api/auth/signup', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then(resp => resp.json())
      .then(data => {
        if(data.message == 'Failed! Email is already in use!') {
            alert(data.message);
            emailRef.current.focus();
            return;
        }
        if(data.message == 'Failed! Username is already in use!') {
            alert(data.message);
            usernameRef.current.focus();
            return;
        }
        if(data.message == "User registered successfully!") {
            navigate('/login');
        }
      })
      .catch(err => {
           console.log(err); 
      })
    }

    return (
        <div className={styles.register_page}>
            <h2>Register Page</h2>
            <form className={styles.form}>
                <input ref={usernameRef} type="text" placeholder="Enter username"/>
                <input ref={emailRef} type="email" placeholder="Enter email"/>
                <input ref={passwordRef} type="password" placeholder="Enter password"/>
                <input ref={repasswordRef} type="password" placeholder="Repead password"/>

                <button onClick={handleForm}>Register</button>
                <Link className={styles.linke} to = '/login'>Login</Link>
            </form>
        </div>
    )
}
export default Register