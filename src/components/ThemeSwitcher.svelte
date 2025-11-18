<script>
  import { themes, getCurrentTheme, setTheme } from '../config/themes.js'
  
  let currentTheme = getCurrentTheme()
  let isOpen = false
  
  function changeTheme(themeName) {
    currentTheme = themeName
    setTheme(themeName)
    isOpen = false
  }
  
  function toggleDropdown() {
    isOpen = !isOpen
  }
  
  // Close dropdown when clicking outside
  function handleClickOutside(event) {
    if (isOpen && !event.target.closest('.theme-switcher')) {
      isOpen = false
    }
  }
</script>

<svelte:window on:click={handleClickOutside} />

<div class="theme-switcher">
  <button class="theme-btn" on:click|stopPropagation={toggleDropdown}>
    <span class="icon">🎨</span>
    <span class="label">{themes[currentTheme]?.name || 'Theme'}</span>
    <span class="arrow">{isOpen ? '▲' : '▼'}</span>
  </button>
  
  {#if isOpen}
    <div class="dropdown">
      {#each Object.entries(themes) as [key, theme]}
        <button
          class="theme-option"
          class:active={currentTheme === key}
          on:click={() => changeTheme(key)}
        >
          <div class="color-preview" style="background: {theme.colors.accent}"></div>
          <span>{theme.name}</span>
          {#if currentTheme === key}
            <span class="check">✓</span>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

<style>
  .theme-switcher {
    position: relative;
  }
  
  .theme-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.75rem;
    background: var(--bg-overlay);
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    color: var(--text);
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s, border-color 0.2s;
  }
  
  .theme-btn:hover {
    background: var(--bg-hover);
    border-color: var(--accent);
  }
  
  .icon {
    font-size: 1.1rem;
  }
  
  .arrow {
    font-size: 0.7rem;
    opacity: 0.7;
  }
  
  .dropdown {
    position: absolute;
    top: calc(100% + 0.5rem);
    right: 0;
    min-width: 200px;
    background: var(--card);
    border: 1px solid var(--border-medium);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
    z-index: 100;
    overflow: hidden;
  }
  
  .theme-option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1rem;
    background: transparent;
    border: none;
    color: var(--text);
    cursor: pointer;
    font-size: 0.9rem;
    transition: background 0.2s;
    text-align: left;
  }
  
  .theme-option:hover {
    background: var(--bg-hover);
  }
  
  .theme-option.active {
    background: var(--bg-overlay);
  }
  
  .color-preview {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    flex-shrink: 0;
  }
  
  .check {
    margin-left: auto;
    color: var(--accent);
    font-weight: bold;
  }
  
  @media (max-width: 700px) {
    .label {
      display: none;
    }
  }
</style>
