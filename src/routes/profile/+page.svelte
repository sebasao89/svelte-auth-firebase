<script>
    import { isLoggedIn, user } from '../../stores'
</script>


<div class="profile">
    <h1>Profile</h1>

    {#if $isLoggedIn}
        <h2>Esta logueado!</h2>
        <img src={$user.photoURL} alt={$user.displayName}>
        <h3>{$user.displayName}</h3>
        <p>{$user.email}</p>
    {/if}
</div>
