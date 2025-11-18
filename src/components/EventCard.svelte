<script>
  export let e
  export let isPast = false
</script>

<article class="card" class:past={isPast}>
  <div class="title">{e.title}</div>
  <div class="datetime">{e.datetime}</div>
  <div class="loc">{e.location}</div>
  <p class="desc">{e.desc}</p>
  {#if !isPast}
    <div class="actions"><a class="btn" href="#contact">RSVP / Contact</a></div>
  {/if}
</article>

<style>
  .card{background:linear-gradient(180deg, rgba(255,255,255,0.02), transparent);padding:1.5rem;border-radius:12px;border:1px solid rgba(255,255,255,0.04)}
  .card.past{opacity:0.6}
  .title{font-weight:700;margin-bottom:0.4rem}
  .datetime{color:var(--muted);font-size:0.9rem;margin-bottom:0.4rem}
  .loc{color:var(--accent);font-weight:600;margin-bottom:0.6rem}
  .desc{color:var(--muted);margin-top:0.6rem}
  .actions{margin-top:0.8rem}
  .btn{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:0.5rem 0.7rem;border-radius:8px;text-decoration:none;color:var(--text);font-weight:600}
</style>
