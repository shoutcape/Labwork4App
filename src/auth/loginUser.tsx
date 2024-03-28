// tänne tulee login logiikka
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase"

export async function loginUser(email:string, password:string) {
    try {
        const res = await signInWithEmailAndPassword(auth,email,password)
        console.log(res)
    } catch(error) {
        throw error
    }
}