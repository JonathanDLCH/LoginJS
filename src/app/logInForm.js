import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const logInForm = document.querySelector('#logIn-form')

logInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = logInForm['login-email'].value
    const password = logInForm['login-password'].value

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        const modal = bootstrap.Modal.getInstance(document.querySelector('#logInModal'))
        modal.hide()

        showMessage("Welcome "+credentials.user.email)
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

//12:20