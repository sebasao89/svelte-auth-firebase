<script>
    import { signOut, onAuthStateChanged } from 'firebase/auth'
    import { auth } from '../firebase'
    import { isLoggedIn, user } from '../stores'

    const cerrarSesion = async() => {
        try {
            await signOut(auth)
            $isLoggedIn = false
            $user = {}
        } catch(error) {
           console.log(error) 
        }
        
    }

    onAuthStateChanged(auth, authUser => {
        // console.log(authUser)
        $user = authUser
        $isLoggedIn = !!authUser
    })
</script>


<nav>
    <ul>
        <li>
            <a href="/#">Home</a>
        </li>        
        {#if $isLoggedIn}
        <li>
            <a href="/profile">Profile</a>
        </li>
        <li>
            <a href="/" on:click={cerrarSesion}>Logout</a>
        </li>
        {:else}
        <li>
            <a href="/login">Login</a>
        </li>
        {/if}
    </ul>
</nav>

<slot><!-- optional fallback --></slot>