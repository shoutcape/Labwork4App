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
} from '@ionic/react';
import './Home.css';
import { Link } from 'react-router-dom';
import { loginUser } from '../auth/loginUser';
import { useState } from 'react';


// react fc must include the values used in the return section
const Home: React.FC = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit = (e: any) => {
        e.preventDefault();
        loginUser(username,password)
        console.log('nappia painettu');
    };

    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>
                        <h2 className="ion-text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <IonInput placeholder="Username" 
                            onIonChange={(e:any) => setUsername(e.target.value)}/>
                            <IonInput placeholder="Password" 
                            onIonChange={(e:any) => setPassword(e.target.value)}/>
                            <IonButton expand='block' type="submit" className='w-100'>Login</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                <div className="ion-text-center mt-2">
                    Don't have an account? <Link to='/signup'>Sign Up</Link>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
