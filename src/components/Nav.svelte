<script>
  import { router } from '../stores/router.js'
  import { APP_CONFIG, ROUTES, NAV_LINKS } from '../config/constants.js'
  import ThemeSwitcher from './ThemeSwitcher.svelte'
  
  let open = false
  
  /**
   * Navigate to a route and close mobile menu
   * @param {string} hash - Route hash
   */
  function navTo(hash) {
    router.navigate(hash)
    open = false
  }

  function closeMenu() {
    open = false
  }
</script>

<nav class="nav">
  <div class="nav-inner">
    <button class="brand" on:click={() => navTo(ROUTES.HOME)}>
      <img src={APP_CONFIG.logo} alt="{APP_CONFIG.clubName} logo" class="logo" />
      <div class="brand-text">
        <div class="title">{APP_CONFIG.clubName}</div>
        <div class="subtitle">{APP_CONFIG.schoolName}</div>
      </div>
    </button>

    <div class="nav-right">
      <ThemeSwitcher />
      <button class="burger" on:click={() => open = !open} aria-label="Toggle menu">☰</button>
    </div>

    <ul class:open={open} class="links">
      {#each NAV_LINKS as link (link.label)}
        <li>
          {#if link.external}
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              on:click={closeMenu}
            >
              {link.label}
            </a>
          {:else}
            <a href={link.href} on:click|preventDefault={() => navTo(link.href)}>{link.label}</a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  .nav {
    background: var(--card);
    padding: 0.75rem 1.5rem;
    border-bottom: 2px solid var(--border-accent);
    position: sticky;
    top: 0;
    z-index: 50;
    backdrop-filter: blur(12px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .nav-inner {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    cursor: pointer;
    background: transparent;
    border: 0;
    padding: 0;
    color: inherit;
    font: inherit;
    transition: transform 0.2s ease;
  }

  .brand:hover {
    transform: translateY(-2px);
  }

  .brand:hover .logo {
    box-shadow: 0 0 20px var(--accent-subtle);
  }
  
  .logo {
    height: 52px;
    width: 52px;
    border-radius: 8px;
    border: 2px solid var(--border-accent);
    box-shadow: 0 2px 4px var(--accent-subtle);
    transition: all 0.3s ease;
  }
  
  .title {
    font-weight: 700;
    font-size: 1.05rem;
    color: var(--text-bright);
  }
  
  .subtitle {
    font-size: 0.75rem;
    color: var(--muted);
    font-weight: 500;
  }
  
  .nav-right {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .links {
    display: flex;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  .links a {
    color: var(--text);
    text-decoration: none;
    padding: 0.6rem 1rem;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;
    position: relative;
  }

  .links a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
    width: 80%;
    height: 2px;
    background: linear-gradient(90deg, var(--accent), var(--cyan));
    transition: transform 0.3s ease;
  }

  .links a:hover::after {
    transform: translateX(-50%) scaleX(1);
  }
  
  .links a:hover {
    background: var(--bg-hover);
    color: var(--accent);
  }

  .burger {
    display: none;
    background: transparent;
    border: 2px solid var(--border-accent);
    color: var(--accent);
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    transition: all 0.2s ease;
  }

  .burger:hover {
    background: var(--bg-hover);
    box-shadow: 0 0 15px var(--accent-subtle);
  }

  @media (max-width: 700px) {
    .nav {
      padding: 0.6rem 1rem;
    }

    .nav-right {
      gap: 0.75rem;
    }

    .logo {
      height: 45px;
      width: 45px;
    }
    
    .links {
      position: absolute;
      right: 1rem;
      top: 72px;
      flex-direction: column;
      background: var(--card);
      padding: 1rem;
      border-radius: 12px;
      display: none;
      box-shadow: 0 8px 24px var(--accent-subtle);
      border: 1px solid var(--border-accent);
    }
    
    .links.open {
      display: flex;
    }
    
    .burger {
      display: block;
    }
  }
</style>
