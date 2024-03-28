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

// react fc must include the values used in the return section
const Home: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [showToast, setShowToast] = useState<boolean>(false);
    const [toastMessage, setToastMessage] = useState('');

    const handleSubmit = async () => {
        try {
            await loginUser(username, password);
            setLoading(true);
            setToastMessage('Login successful');
        } catch (error: any) {
            setToastMessage(`Login failed: ${error.message}`);
        }
        setLoading(false);
        setShowToast(true);
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
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
                            <IonInput
                                type="email"
                                placeholder="Email"
                                onIonChange={(e: any) =>
                                    setUsername(e.target.value!)
                                }
                            />
                            <IonInput
                                type="password"
                                placeholder="Password"
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
