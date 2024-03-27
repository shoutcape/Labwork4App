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

const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('nappia painettu');
};

const Home: React.FC = () => {
    return (
        <IonPage>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardContent>
                        <h2 className="ion-text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
                            <IonInput placeholder="Username" />
                            <IonInput placeholder="Password" />
                            <IonButton expand='block' type="submit" className='w-100'>Login</IonButton>
                        </form>
                    </IonCardContent>
                </IonCard>
                <div className="ion-text-center mt-2">
                    Don't have an account? <Link to='/home'>Login</Link>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default Home;
