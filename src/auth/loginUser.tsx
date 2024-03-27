// tänne tulee login logiikka
import firebase from "../Firebase.js"

export async function loginUser(username:string, password:string) {
    const email = `${username}@gmail.com`
    try {
        const res = await firebase.auth().signInWithEmailAndPassword(email,password)
        console.log(res)
    } catch(error) {
        throw error
    }
    
}