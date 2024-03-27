import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonInput, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, {useRef} from 'react';

const Signup: React.FC = () => {
    const emailRef = useRef();

    return (
        <IonCard>
          <IonCardContent>
            <h2 className="ion-text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <IonInput
                type="email"
                value={email}
                placeholder="Email"
                onIonChange={(e) => setEmail(e.target.value)}
                required
              />
              <IonButton expand="block" type="submit" className="ion-margin-top">
                Sign Up
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      );
    };
    

export default Signup;