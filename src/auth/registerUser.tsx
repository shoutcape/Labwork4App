// tänne tulee register logiikka
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'

export async function registerUser(email:string, password:string) {
    try {
        const res = await createUserWithEmailAndPassword( auth,email,password)
        console.log("User registered", res);
        return res;
    } catch(error) {
        console.error("Failed to register user", error);
        throw error
    }
    
}