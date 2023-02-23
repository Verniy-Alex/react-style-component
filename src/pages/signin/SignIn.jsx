import React, { useRef } from 'react';
import { appRoutes } from '../../routes/Routes';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import '../signin/signin.css'

const SignIn = () => {
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
        height: 500px;
    `
    const Button = styled.button`
        background-color: lightblue;
        width:400px;
        margin-top: 40px;
        height: 40px;
        outline:none;
        border:none;
        cursor:pointer;
    `

    const validEmail = /^.{3,}@.{2,}\..{2,}$/i
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/

    function handleChange(e) {
        if (e.target.name === 'email' && validEmail.exec(e.target.value)) {
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
                            <h3>Sign In</h3>
                        </div>
                        <div className='Form-block'>

                            <input type='text' onChange={handleChange} name='email' placeholder='Email Adress' />
                            <div className='password-box'>
                                <input type='password' ref={checkPass} onChange={handleChange} name='password' placeholder='Password' />
                                <img className='pass-icon' src={passIcon} alt='passwordIcon' onClick={showPassword} />
                            </div>
                            <div className='check-block'>
                                <input className='checkbox' type="checkbox" />
                                <span>Remember me</span>
                            </div>
                            <Button>Sign In</Button>
                            <div className='info-block'>
                                <a href='#'>Forgot password?</a>
                                <Link to={appRoutes.signUp.path}>Don`t have an account? <span className='subinfo' >SignUp</span> </Link>
                            </div>
                        </div>
                    </div>
                </Content>
            </Container>

        </Wrapper>
    );
};

export default SignIn;