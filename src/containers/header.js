import React from 'react';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { useLocation } from 'react-router-dom';

export function HeaderContainer({ children }) {
    var location = useLocation().pathname
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" alt="Netflix" />
                <Header.Group>
                    {(location !== '/signin' && location !== '/signup') ? <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink> : ''}
                    <Header.ButtonGit href="https://github.com/dev-david-s/netflix-clone" target="_blank">See In Repo</Header.ButtonGit>
                </Header.Group>
            </Header.Frame>
            {children}
        </Header>
    )
}