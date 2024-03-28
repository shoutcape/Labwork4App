
// tänne tulee register logiikka
import firebase from '../firebaseConfig'

export async function registerUser(username:string, password:string) {
    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email,password)
        console.log(res)
    } catch(error) {
        throw error
    }
    
}