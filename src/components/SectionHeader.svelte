<script>
  /**
   * Reusable section header with decorative divider
   * @component
   */
  
  /** @type {string} Section title */
  export let title
  
  /** @type {boolean} [showDivider=true] Show gradient divider */
  export let showDivider = true
</script>

<div class="section-header">
  <h3>{title}</h3>
  {#if showDivider}
    <div class="divider"></div>
  {/if}
</div>

<style>
  .section-header {
    margin-bottom: 2rem;
  }
  
  h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: var(--accent);
    padding-bottom: 0.5rem;
    border-bottom: 2px solid var(--border-accent);
  }
  
  .divider {
    height: 3px;
    background: linear-gradient(90deg, var(--accent) 0%, var(--cyan) 50%, transparent 100%);
    border-radius: 2px;
    margin-top: 0.5rem;
  }
</style>

