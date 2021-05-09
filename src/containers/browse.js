import React, { useState } from 'react';
import { Header } from '../components';
import { SelectProfileContainer } from './profiles';
import { FooterContainer } from './footer';

import * as ROUTES from '../constants/routes';

import { FirebaseContext } from '../context/firebase';

export function BrowseContainer() {

    const [profile, setProfile] = useState({});

    const user = {
        displayName: "David",
        photoURL: "1"
    }

    return profile.displayName ? (
        <>
            <p>Browse Container</p>
            <FooterContainer />
        </>
    ) : (<SelectProfileContainer user={user} setProfile={setProfile} />)
}