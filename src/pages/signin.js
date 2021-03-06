import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { Form } from '../components';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';

import * as ROUTES from '../constants/routes';

export default function Signin() {
    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' | emailAddress === '';

    const bypassSignin = (event) => {
        event.preventDefault()

        firebase
            .auth()
            .signInWithEmailAndPassword("test@gmail.com", "123456")
            .then(() => {
                history.push(ROUTES.BROWSE)
            })
            .catch((err) => {
                setEmailAddress("")
                setPassword("")
                setError(err.message)
            })
    }

    const handleSignin = (event) => {
        event.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            }).catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Sign In</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}

                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit">
                            Sign In
                    </Form.Submit>

                        <Form.Text>
                            New to Netflix? <Form.Link to="/signup">Sign up now</Form.Link>
                        </Form.Text>

                        <Form.TextSmall>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot.
                        </Form.TextSmall>

                        <Form.TextSmall>
                            Authentication provided through Firebase, but email verification has been turned off.
                            You can register with an arbitrary email or click below to bypass authentication.
                         </Form.TextSmall>

                        <Form.Submit onClick={bypassSignin}>
                            Skip Sign In
                        </Form.Submit>
                    </Form.Base>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}