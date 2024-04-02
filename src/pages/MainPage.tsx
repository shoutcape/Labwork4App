import {
    IonContent,
    IonHeader,
    IonLoading,
    IonPage,
    IonRoute,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import firebase from '../firebaseConfig';
import { Redirect } from 'react-router';

const MainPage: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    // start loading by default to wait for the authentication check
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // on Firebase authStateChange get the authneticated user information
        const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
            // user is logged in
            if (user) {
                setLoggedIn(true);
            } else {
                // user is not logged in
                setLoggedIn(false);
            }
            // end loading
            setLoading(false);
        });

        // end the useEffect function to avoid memory leaks and unwanted behaviour
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <IonPage>
        </IonPage>;
    }

    if (!loggedIn) {
        return <Redirect to="/login" />;
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Main Screen</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">UI goes here...</IonContent>
        </IonPage>
    );
};

export default MainPage;
