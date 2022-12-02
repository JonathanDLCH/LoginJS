import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const googleButton = document.querySelector('#googleLogin')

googleButton.addEventListener('click', async()=>{

    const provider = new GoogleAuthProvider()

    try {
        const credentials = await signInWithPopup(auth,provider)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#logInModal'))
        modal.hide()

        showMessage("Welcome "+credentials.user.displayName)
    } catch (error) {
        if(error.code==='auth/wrong-password'){
            showMessage('Wrong password','error')
        }else if(error.code==='auth/user-not-found'){
            showMessage('User not found','error')
        }else{
            showMessage(error.message,'error')
        }
    }
})