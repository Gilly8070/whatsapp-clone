import { Button } from '@material-ui/core';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { auth, provider } from '../firebase';

function Login() {
    const [logoUrl, setLogoUrl] = useState('https://cdn.lineupx.com/images/logo/Icon-Fill-Black.png');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [vercel, setVercel] = useState(`https://vercel-og-nextjs-theta.vercel.app/api/dynamic-image?logourl=https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbeLjSzrw7sjmGjAIoq_6F0oKgkrbTLGGaD6rnTcDytg&s&title=helloworld&desc=2-3,4-5,mumbai-pune`)
    const signIn = () => {
        auth.signInWithPopup(provider).catch(alert);
    }
    return (
        <div>
            <Head>
                <title>
                    Login Page helloworld
                </title>
                <meta name="description" content="LineupX | 4609 followers on LinkedIn. On a mission to make recruitment easy for everybody | Lineupx is a recruitment platform that enables companies to hire" />
                <meta name="theme-color" content="#008f68" />
                <meta property="og:url" content="https://lineupx.com" />
                <meta property="og:title" content="Lineupx" />
                <meta property="og:type" key="og:type" content="website" />
                <meta property="og:description" content="LineupX | 4609 followers on LinkedIn. On a mission to make recruitment easy for everybody | Lineupx is a recruitment platform that enables companies to hire" />
                <meta property="og:image" content={"https://vercel-og-nextjs-theta.vercel.app/api/dynamic-image?logourl=https://cdn.lineupx.com/images/logo/Icon-Fill-Black.png&title=helloworld&desc=2-3,4-5,mumbai-pune"} />
            </Head>
            <Container>
                <LoginContainer>
                    <Logo
                        src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png'
                    />
                    <Button onClick={signIn} variant='outlined'>Sign in with Google Now3333</Button>
                </LoginContainer>
            </Container>
        </div>
    )
}

export default Login;

const Container = styled.div`
display: grid;
height: 100vh;
place-items: center;
`;
const LoginContainer = styled.div`
display: flex;
flex-direction: column;
padding: 100px;
align-items: center;
background-color: white;
border-radius: 5px;
box-shadow: 0px 4px 14px -3px rgba(0,0,0,0.7);
`;
const Logo = styled.img`
height: 200px;
width: 200px;
margin-bottom: 50px;
`;
const Div = styled.div`
`;

