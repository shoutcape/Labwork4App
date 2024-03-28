import React, { useState } from 'react';
import { IonPage, IonContent, IonCard, IonCardContent, IonInput, IonButton, IonAlert } from '@ionic/react';
import { Link } from 'react-router-dom';
import { registerUser } from '../auth/registerUser';

const Signup: React.FC = () => {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      if (password !== passwordConfirm) {
        setError('Passwords do not match');
        return;
      }

      await registerUser(email, password);

      setError('');
      setPasswordConfirm('');
      setPassword('')
      setEmail('')

      console.log('User created');
    } catch (error: any) {
      console.error('Error occurred during signup', error.message);
      setError('Failed to create an account');

    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h2 className="ion-text-center mb-4">Sign Up</h2>
            <IonAlert isOpen={!!error} onDidDismiss={() => setError('')} message={error} buttons={['OK']} />
            <form onSubmit={e => {e.preventDefault(); handleSignup();}}>
              <IonInput
                type="email"
                placeholder="Email"
                value={email}
                onIonChange={e => setEmail(e.detail.value!)} required
              />
              <IonInput
                type="password"
                placeholder="Password"
                value={password}
                onIonChange={e => setPassword(e.detail.value!)} required
              />
              <IonInput
                type="password"
                placeholder="Password Confirmation"
                value={passwordConfirm}
                onIonChange={e => setPasswordConfirm(e.detail.value!)} required
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
