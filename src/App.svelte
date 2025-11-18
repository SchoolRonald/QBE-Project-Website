<script>
  import Nav from './components/Nav.svelte'
  import Footer from './components/Footer.svelte'
  import Home from './pages/Home.svelte'
  import Events from './pages/Events.svelte'
  import Contact from './pages/Contact.svelte'

  const routes = {
    '#home': Home,
    '#events': Events,
    '#contact': Contact,
  }

  let current = '#home'

  function onHashChange() {
    current = window.location.hash || '#home'
  }

  window.addEventListener('hashchange', onHashChange)
  onHashChange()
</script>

<main class="app">
  <Nav />
  <section class="content">
    {#if routes[current]}
      <svelte:component this={routes[current]} />
    {:else}
      <Home />
    {/if}
  </section>
  <Footer />
</main>

<style>
  .app{
    display:flex;
    min-height:100vh;
    flex-direction:column;
    background: linear-gradient(180deg, #20314D 0%, #1a2738 100%);
    color:var(--text);
  }
  .content{
    flex:1;
    padding:2rem;
    max-width:1250px;
    width:100%;
    margin:0 auto;
  }
</style>
