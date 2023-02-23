import { Link } from 'react-router-dom';
import { appRoutes } from '../../routes/Routes';
import '../signup/signup.css'
import styled from "styled-components";
import { useState } from 'react';
import { useRef } from 'react';
const SignUp = () => {
    const Wrapper = styled.div`
    width:1024px;
    margin:0 auto;
    `
    const Container = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top:100px;
    `
    const Content = styled.div`
        background-color: black;
        width:450px;
        max-widht:500px;
        height: 600px;
        padding-left: 15px;
        padding-right: 15px;
    `
    const Button = styled.button`
        background-color: lightblue;
        margin-top: 40px;
        height: 40px;
        outline:none;
        border:none;
        cursor:pointer;
        width:400px;
    `


    const validEmail = /^.{3,}@.{2,}\..{2,}$/i
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/

    function handleChange(e) {
        if (e.target.name === 'firstName' && e.target.value.trim().length >= 3) {
            e.target.style.border = '1px solid green'
        }
        else if (e.target.name === 'lastName' && e.target.value.length >= 3) {
            e.target.style.border = '1px solid green'
        } else if (e.target.name === 'email' && validEmail.exec(e.target.value)) {
            e.target.style.border = '1px solid green'
        } else if (e.target.name === 'password' && validPassword.exec(e.target.value)) {
            e.target.style.border = '1px solid green'
        } else {
            e.target.style.border = '1px solid red'
        }
    }

    const passIcon = 'https://uhnfoundation.ca/wp-content/themes/tgwhf_2020/img/flag-icons/vision.png'
    const checkPass = useRef(null)
    const showPassword = () => {
        checkPass.current.type = 'text'
    }
    return (

        <Wrapper>
            <Container>
                <Content>
                    <div className='content-block'>
                        <div className='hero-block'>
                            <img src='https://cdn-icons-png.flaticon.com/512/565/565547.png' alt='userIcon' />
                            <h3>Sign Up</h3>
                        </div>
                        <div className='Form-block'>
                            <div className='person-form-block'>
                                <input type='text' onChange={handleChange} name='firstName' placeholder='First Name *' />
                                <input type='text' onChange={handleChange} name='lastName' placeholder='Last Name *' />
                            </div>
                            <input type='text' onChange={handleChange} name='email' placeholder='Email Adress *' />
                            <div className='password-box'>
                                <input type='password' ref={checkPass} onChange={handleChange} name='password' placeholder='Password *' />
                                <img className='pass-icon' src={passIcon} alt='passwordIcon' onClick={showPassword} />
                            </div>

                            <div className='check-block'>
                                <input className='checkbox' type="checkbox" />
                                <span>I want to receive inspiration marketing promotions and updates via email</span>
                            </div>
                            <Button>Sign In</Button>
                            <div className='info-block'>
                                <Link to={appRoutes.signIn.path}>Alredy have an account? <span className='subinfo'> Sign In</span></Link>
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>
        </Wrapper>
    );
};

export default SignUp;