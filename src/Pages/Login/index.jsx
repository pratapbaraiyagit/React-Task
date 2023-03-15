import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as yup from "yup";
import { Formik, Form } from 'formik';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginValidation = yup.object().shape({
    email: yup.string().email('Please enter valid email').required('Email is required.'),
    password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required.'),
  })

  return (
    <div className="loginContainer">
      <ToastContainer />
      <div className='topBg' />
      <div className="container px-5 bg-white" style={{ zIndex: 2, borderRadius: '30%' }}>
        <div className="mx-lg-5 py-5 mb-3  px-lg-5 login ">
          <Formik
            initialValues={{
              email: "",
              password: ""
            }}
            validationSchema={loginValidation}
            validateOnBlur={false}
            // onSubmit={onSubmit}
          >
            {(props) => (
              <>
                <Form >
                  <div className="my-3">
                    <div className="form-floating ">
                      <input
                        type="text"
                        className="form-control"
                        name='email'
                        onChange={props.handleChange}
                        value={props.values.email}
                        placeholder={props.values.email || "email"}
                      />
                      <label >Enter exiting email</label>
                      {/* <p href="" className='input_icon'><AiFillMail /></p> */}
                    </div>
                    {props.errors.email && props.touched.email ? (<div className='error'>{props.errors.email}</div>) : ""}
                  </div>
                  <div className="my-3">
                    <div className="form-floating ">
                      <input
                        type="password"
                        className="form-control"
                        name='password'
                        onChange={props.handleChange}
                        value={props.values.password}
                        placeholder={props.values.password || "Password"}
                      />
                      <label >Password</label>
                      {/* <p href="" className='input_icon'><MdPassword /></p> */}
                    </div>
                    {props.errors.password && props.errors.password ? (<div className='error'>{props.errors.password}</div>) : null}
                  </div>
                  <div className="">
                    <div className="d-flex justify-content-end align">
                      <div className="text-danger">
                        <a className='m-0 text-muted text-danger' onClick={() => navigate('/admin/forgot-password')}>Forgot Password?</a>
                      </div>
                    </div>
                  </div>
                  <button className='active_Servicesbtn px-4 py-3 my-3 w-100' type='submit'>
                    Login
                  </button>
                </Form>
              </>
            )}
          </Formik>
        </div>
      </div>
      {/* <div className='bottomBg' style={{ background: `url(${img_loginBg})` }} /> */}
      {/* <img src={img_loginBg} className='bottomBg'/> */}
    </div>
  )
}

export default Login