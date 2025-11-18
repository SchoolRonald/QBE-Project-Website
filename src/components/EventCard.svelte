<script>
  /**
   * Event card component for displaying event information
   * @component
   */
  
  /** @type {{ title: string, date: string, time?: string|null, location: string, desc: string, oreconnect_url?: string }} */
  export let e
  
  /** @type {boolean} Whether this event is in the past */
  export let isPast = false
</script>

<article class="card" class:past={isPast}>
    <div class="title">{e.title}</div>
    <div class="date">{e.date}</div>
    {#if e.time}
        <div class="time">{e.time}</div>
    {/if}
    <div class="loc">{e.location}</div>
  <p class="desc">{e.desc}</p>
  {#if !isPast}
    <div class="actions">
      {#if e.oreconnect_url}
        <a class="btn" href={e.oreconnect_url} target="_blank" rel="noopener noreferrer">OreConnect</a>
      {/if}
    </div>
  {/if}
</article>

<style>
  .card {
    background: var(--card);
    padding: 1.75rem;
    border-radius: 12px;
    border: 1px solid var(--border-subtle);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--accent), transparent);
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .card:hover::before {
    opacity: 1;
  }
  
  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
    border-color: var(--border-medium);
    background: var(--card-hover);
  }
  
  .card.past {
    opacity: 0.6;
  }
  
  .card.past:hover {
    opacity: 0.7;
  }

  
  .title {
    font-weight: 700;
    margin-bottom: 0.75rem;
    font-size: 1.15rem;
    min-height: 3rem;
    color: var(--text-bright);
    line-height: 1.4;
  }
  
  .date {
    color: var(--muted);
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }
  
  .time {
    color: var(--muted);
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  
  .loc {
    color: var(--accent);
    font-weight: 600;
    font-size: 0.9rem;
    margin-bottom: 0.75rem;
    display: inline-block;
  }
  
  .desc {
    color: var(--muted);
    margin-top: 0.75rem;
    line-height: 1.6;
  }
  
  .actions {
    margin-top: 1.25rem;
  }
  
  .btn {
    background: var(--bg-overlay);
    border: 1.5px solid var(--border-medium);
    padding: 0.625rem 1rem;
    border-radius: 6px;
    text-decoration: none;
    color: var(--text);
    font-weight: 600;
    font-size: 0.9rem;
    display: inline-block;
    transition: all 0.2s ease;
  }
  
  .btn:hover {
    background: var(--accent);
    border-color: var(--accent);
    color: white;
    transform: translateY(-1px);
  }
</style>
