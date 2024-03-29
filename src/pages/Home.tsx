import {
    IonButton,
    IonCard,
    IonCardContent,
    IonContent,
    IonHeader,
    IonInput,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLoading,
    IonToast,
} from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../auth/loginUser';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

// react fc must include the values used in the return section
const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState('');
    const history = useHistory()

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await loginUser(username, password);
            setToastMessage('Login successful');
            history.push('/mainPage')

        } catch (error: any) {
            setToastMessage(`Login failed: ${error.message}`);
        }
        setShowToast(true);
        setLoading(false);
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
            <div className="ion-text-center mb-4">Log In</div>
            <div className="ion-text-center mb-5">Tähän jotain tekstiä.</div>
                <IonLoading
                    message={'Logging in please wait...'}
                    duration={0}
                    isOpen={loading}
                ></IonLoading>
                <IonCard>
                    <IonCardContent>
                        <h2 className="ion-text-center mb-4">Login</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit();
                            }}
                        >
                            <label>Email</label>
                            <IonInput
                                type="email"
                                onIonChange={(e: any) =>
                                    setUsername(e.target.value!)
                                }
                            />
                            <label>Password</label>
                            <IonInput
                                type="password"
                                onIonChange={(e: any) =>
                                    setPassword(e.target.value!)
                                }
                            />
                            <IonButton
                                expand="block"
                                type="submit"
                                className="w-100"
                            >
                                Login
                            </IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                <div className="ion-text-center mt-2">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
                <IonToast
                    isOpen={showToast}
                    onDidDismiss={() => setShowToast(false)}
                    message={toastMessage}
                    duration={3000}
                ></IonToast>
            </IonContent>
        </IonPage>
    );
};

export default Home;
