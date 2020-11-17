// import React, { useState } from 'react';
// import Navbar from '../Shared/Navbar/Navbar';
// import firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './firebase.config';

// firebase.initializeApp(firebaseConfig);

// const Login = () => {
//     const [newUser, setNewUser] = useState(true);
//     // const [user, setUser] = useState({
//     //     name:'',
//     //     email:'',
//     //     error:'',
//     //     isLoggedIn:false
//     // })

//     // google login
//     const  googleLogin = () => {
//         const provider = new firebase.auth.GoogleAuthProvider();
//         firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             // handleResponse(res)
//           })
//           .catch(error => {
//             // handleError(error)
//           });
//     }

//     // facebook login
//     const fbLogin = () => {
//         const provider = new firebase.auth.FacebookAuthProvider();
//         firebase.auth().signInWithPopup(provider)
//         .then(res => {
//             // handleResponse(res)
//           })
//           .catch(error => {
//             // handleError(error)
//           });
//     }

//     // //handle response
//     // const handleResponse = res => {
//     //     const {displayName, email} = res.user;
//     //     const signedInUser = {
//     //         name:displayName,
//     //         email:email,
//     //         isLoggedIn:true
//     //     };
//     //     setUser(signedInUser);
//     // }

//     // //handle error
//     // const handleError = error => {
//     //     const signedInUser = {
//     //         error:error.message,
//     //         isLoggedIn:false
//     //     };
//     //     setUser(signedInUser)
//     // }

//     return (
//         <div>
//             <Navbar/>
//             <div style={{width:'450px'}} className=" mx-auto mt-4 mb-5">
//                 <div className="rounded border px-5 py-4">
//                     <h4 className="font-weight-bold mb-4">Create an account</h4>
//                     <form >
//                         {
//                             newUser && 
//                             <div>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" 
//                                     name="firstName"
//                                     placeholder="First Name"
//                                     required
//                                     />
//                                 </div>
//                                 <div className="form-group">
//                                     <input type="text" className="form-control" 
//                                     name="lastName"
//                                     placeholder="Last Name"
//                                     required
//                                     />
//                                 </div>
//                             </div>
                            
//                         }
//                         <div className="form-group">
//                             <input type="email" className="form-control" 
//                             name="email"
//                             placeholder="Email"
//                             required
//                             />
//                         </div>
//                         <div className="form-group">
//                             <input type="password" className="form-control" 
//                             name="password"
//                             placeholder="Password"
//                             required
//                             />
//                         </div>
//                         {
//                             newUser &&
//                             <div className="form-group">
//                                 <input type="password" className="form-control" 
//                                 name="confirmPassword"
//                                 placeholder="Confirm Password"
//                                 required
//                                 />
//                             </div>
//                         }
//                         <button className="btn btn-primary form-control">Create an account</button>
//                         <p className="text-center mt-3">{newUser ? 'Already have an account?' : "Don't have an account?"} <span style={{cursor:'pointer'}} onClick={() => setNewUser(!newUser)} className="text-success">{ newUser ? 'Login' : 'Create an account'}</span></p>
//                     </form>
//                 </div>

//                 <p className="text-center font-weight-bold my-2">or</p>
//                 <button onClick={fbLogin} className='border rounded-pill mt-3 row d-flex justify-content-between align-items-center py-2 btn mx-5'>
//                     <img className='w-100 col-2 pl-0' src="https://iili.io/Fx0nLX.png" alt=""/>
//                     <h6 className="col-10 m-0">Continue with Facebook</h6>
//                 </button>
//                 <button onClick={googleLogin} className='border rounded-pill mt-3 row d-flex justify-content-between align-items-center py-2 btn mx-5'>
//                     <img className='w-100 col-2 pl-0' src="https://i.ibb.co/pZbCcqY/1004px-Google-G-Logo-svg.png" alt=""/>
//                     <h6 className="col-10 m-0">Continue with Google</h6>
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Login;


import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import firebase from "firebase";
import './Login.sass';
import { useHistory, useLocation } from "react-router-dom";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");

  const [newUserInfo, setNewUserInfo] = useState(false);

  const [user, setUser] = useState({
    isSignedIn: false,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  //Facebook
  const providerFB = new firebase.auth.FacebookAuthProvider();
  const handleFaceBookSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(providerFB)
      .then((res) => {
        const { email, displayName } = res.user;

        // history.replace(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Google
  const providerGG = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(providerGG)
      .then((res) => {
        const { email, displayName } = res.user;

        // history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // //Location
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const onSubmit = (data) => {
    if (newUserInfo && data.email && data.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          const newUser = { ...user, email: data.email, name: data.name };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          //   setLoggedIn(newUser);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          setUser(newUser);
          //   setLoggedIn(newUser);
        });
    }

    if (!newUserInfo && data.email && data.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password)
        .then((res) => {
          const newUser = { ...user, email: data.email, name: data.name };
          newUser.error = "";
          newUser.success = true;
          setUser(newUser);
          //   setLoggedIn(newUser);
          //   history.replace(from);
        })
        .catch((error) => {
          const newUser = { ...user };
          newUser.error = error.message;
          newUser.success = false;
          //   setLoggedIn(newUser);
          setUser(newUser);
        });
    }
  };

  return (
    <div className="login container">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 ">
          <form onSubmit={handleSubmit(onSubmit)} className="m-4 __login">
            <h5> {newUserInfo ? " Create a new account?" : "Log in"} </h5>
            <hr />
            {newUserInfo && (
              <div
                className="form-group inputForm"
                style={{ textAlign: "center" }}
              >
                <input
                  name="fullName"
                  className="form-control login__input"
                  placeholder="First Name"
                  ref={register({
                    required: "First name required",
                    minLength: {
                      value: 5,
                      message: "First Name should be 5 characters",
                    },
                  })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.fullName && errors.fullName.message}
                </span>
                <input
                  name="lastName"
                  className="form-control login__input"
                  placeholder="Last Name"
                  ref={register({
                    required: "Last name required",
                    minLength: {
                      value: 5,
                      message: "Last name should be 5 characters",
                    },
                  })}
                />{" "}
                <br />
                <span style={{ color: "red" }}>
                  {errors.lastName && errors.lastName.message}
                </span>
              </div>
            )}
            <div
              className="form-group inputForm"
              style={{ textAlign: "center" }}
            >
              <input
                name="email"
                placeholder="Email"
                className="form-control login__input"
                ref={register({
                  required: "Email is required",
                  validate: (value) =>
                    value.includes("@") || "Email must include '@' symbol",
                })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.email && errors.email.message}
              </span>
            </div>
            <div
              className="form-group inputForm"
              style={{ textAlign: "center" }}
            >
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="form-control login__input"
                ref={register({
                  required: "You must specify a password",
                  minLength: {
                    value: 8,
                    message: "Password mus have at least 8 characters",
                  },
                })}
              />{" "}
              <br />
              <span style={{ color: "red" }}>
                {errors.password && errors.password.message}
              </span>
            </div>
            <div
              className="form-group inputForm"
              style={{ textAlign: "center" }}
            >
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control login__input"
                ref={register({
                  validate: (value) =>
                    value === password.current || "The passwords did not match",
                })}
              />
              <br />
              <span style={{ color: "red" }}>
                {errors.confirmPassword && errors.confirmPassword.message}
              </span>
            </div>
            <div style={{ textAlign: "center" }}>
              <input
                className="btn btn-primary login__inputBtn"
                type="submit"
                value={newUserInfo ? "Create an account" : "Login"}
              />
              <br />
              {(user.error && (
                <p className="alert alert-danger" role="alert">
                  {" "}
                  {user.error}{" "}
                </p>
              )) ||
                (user.success && (
                  <p className="alert alert-success text-center" role="alert">
                    {" "}
                    User {newUserInfo
                      ? "created"
                      : "Logged In"} successfully{" "}
                  </p>
                ))}
              <span
                className="mt-4"
                style={{
                  color: "#16322E",
                  marginTop: "20px",
                  cursor: "pointer",
                }}
                onClick={() => setNewUserInfo(!newUserInfo)}
              >
                <h4>
                  {" "}
                  {newUserInfo
                    ? "Already  have an account?"
                    : "I have no account created?"}{" "}
                </h4>
              </span>
            </div>
          </form>
          <div className="login__or">
            <div className="hr"></div>
            <div className="or">or</div>
            <div className="hr"></div>
          </div>

          <div
            onClick={handleFaceBookSignIn}
            className="login__faceBook__google"
          >
            <div className="login__facebook">
              {" "}
              <img style={{width: '40px', height: '40px'}} src="https://iili.io/Fx0nLX.png" alt="" className=" login__fb" />
              <span>Continue with Facebook</span>
            </div>
          </div>
          <div onClick={handleGoogleSignIn} className="login__faceBook__google">
            <div className="login__facebook">
              {" "}
              <img style={{width: '40px', height: '40px'}}  src="https://i.ibb.co/pZbCcqY/1004px-Google-G-Logo-svg.png" alt="" className=" login__fb" />
              <span className="login__google">Continue with Google</span>
            </div>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};

export default Login;