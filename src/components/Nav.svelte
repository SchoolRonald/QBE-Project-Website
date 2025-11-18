<script>
  import Logo from '../assets/logo.svg'
  let open = false
  function navTo(hash){
    window.location.hash = hash
    open = false
  }
</script>

<nav class="nav">
  <div class="nav-inner">
    <button class="brand" on:click={() => navTo('#home')}>
      <img src="/src/assets/logo.svg" alt="Mines AI Club logo" class="logo" />
      <div class="brand-text">
        <div class="title">Mines AI & ML Club</div>
        <div class="subtitle">Colorado School of Mines</div>
      </div>
    </button>

    <button class="burger" on:click={() => open = !open} aria-label="Toggle menu">☰</button>

    <ul class:open={open} class="links">
      <li><a href="#home" on:click|preventDefault={() => navTo('#home')}>Home</a></li>
      <li><a href="#events" on:click|preventDefault={() => navTo('#events')}>Events</a></li>
      <li><a href="#contact" on:click|preventDefault={() => navTo('#contact')}>Contact</a></li>
    </ul>
  </div>
</nav>

<style>
  :global(:root){
    --accent:#ffb703;
    --muted:#94a3b8;
    --bg:#071024;
    --card:#0b1220;
    --text:#e6eef8;
  }
  .nav{
    background: #071024;
    padding:0.6rem 1rem;
    border-bottom:1px solid rgba(255,255,255,0.08);
    position:sticky;
    top:0;
    z-index:50;
    backdrop-filter: blur(10px);
  }
  .nav-inner{
    max-width:1100px;
    margin:0 auto;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }
  .brand{display:flex;align-items:center;gap:0.8rem;cursor:pointer;background:transparent;border:0;padding:0;color:inherit;font:inherit}
  .logo{height:48px;width:48px}
  .title{font-weight:700}
  .subtitle{font-size:0.75rem;color:var(--muted)}

  .links{display:flex;gap:1rem;list-style:none;margin:0;padding:0}
  .links a{color:var(--text);text-decoration:none;padding:0.4rem 0.6rem;border-radius:6px}
  .links a:hover{background:rgba(255,255,255,0.02)}

  .burger{display:none;background:transparent;border:0;color:var(--text);font-size:1.5rem}

  @media(max-width:700px){
    .links{position:absolute;right:1rem;top:64px;flex-direction:column;background:var(--card);padding:1rem;border-radius:8px;display:none}
    .links.open{display:flex}
    .burger{display:block}
  }
</style>
