// tänne tulee login logiikka
import firebase from 'firebase/compat/app'

export async function registerUser(username:string, password:string) {
    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log(res)
    } catch(error) {
        throw error
    }
    
}