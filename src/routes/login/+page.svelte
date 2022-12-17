<script>
    import { auth } from '../../firebase'
    import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
    import { isLoggedIn, user } from '../../stores'
    import { goto } from '$app/navigation';


    const login = async() => {
        try {
            // alert('Boton Login!')
            const googleProvider = new GoogleAuthProvider()
            const res = await signInWithPopup(auth, googleProvider)
            $user = res.user
            $isLoggedIn = true
            goto('/profile')
            console.log(res)
            
        } catch (error) {
            console.log(error)
        }
        
    }
</script>



<h1>Login</h1>

<button on:click={login}>
    Login with Google
</button>