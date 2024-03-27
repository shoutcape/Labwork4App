import React, { useRef } from 'react';
import { IonPage, IonContent, IonCard, IonCardContent, IonInput, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import { registerUser } from '../auth/loginUser';

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2 className="ion-text-center mb-4">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <IonInput
                type="email"
                placeholder="Email"
                ref={emailRef}
                required
              />
              <IonInput
                type="password"
                placeholder="Password"
                ref={passwordRef}
                required
              />
              <IonInput
                type="password"
                placeholder="Password Confirmation"
                ref={passwordConfirmRef}
                required
              />
              <IonButton expand="block" type="submit" className="w-100">
                Sign Up
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
        <div className="ion-text-center mt-2">
          Already have an account? <Link to='/home'>Login</Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
