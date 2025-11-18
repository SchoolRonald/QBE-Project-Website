<script>
  /**
   * Reusable page header component
   * @component
   */
  
  /** @type {string} Page title */
  export let title
  
  /** @type {string} [subtitle] Optional subtitle/description */
  export let subtitle = ''
</script>

<div class="page-header">
  <h2>{title}</h2>
  {#if subtitle}
    <p class="subtitle">{subtitle}</p>
  {/if}
</div>

<style>
  .page-header {
    margin-bottom: 3rem;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0 0 0.75rem;
    color: var(--text-bright);
  }
  
  .subtitle {
    color: var(--muted);
    font-size: 1.1rem;
    margin: 0;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
  }
</style>
