import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signInForm = document.querySelector('#signIn-form')

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signInForm['signin-email'].value
    const password = signInForm['signin-password'].value

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        //Close the sign in modal
        const signInModal = document.querySelector('#signInModal')
        const modal = bootstrap.Modal.getInstance(signInModal)
        modal.hide()

        showMessage("Welcome "+userCredentials.user.email)

    } catch (error) {
        console.log(error.message)
        console.log(error.code)

        if (error.code === 'auth/email-alredy-in-use') {
            showMessage('Email already in use', 'error')
        } else if (error.code === 'auth/invalid-email') {
            showMessage('Invalid email','error')
        } else if (error.code === 'auth/weak-password') {
            showMessage('Password is too weak','error')
        } else if (error.code) {
            showMessage(error.message,'error')
        }
    }
})