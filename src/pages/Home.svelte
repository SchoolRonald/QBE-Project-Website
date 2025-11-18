<script>
  import featured from '../assets/ai-illustration.svg'
</script>

<section class="hero">
  <div class="hero-inner">
    <div class="left">
      <h1>Mines AI & Machine Learning Club</h1>
      <p class="lead">We bring students together to learn, build, and explore AI and machine learning — from workshops to projects and research collaborations.</p>

      <div class="cta-row">
        <a class="btn primary" href="#events">See Events</a>
        <a class="btn ghost" href="#contact">Join Mailing List</a>
      </div>

      <div class="highlights">
        <div class="item">
          <div class="num">Workshops</div>
          <div class="desc">Hands-on sessions for all levels</div>
        </div>
        <div class="item">
          <div class="num">Projects</div>
          <div class="desc">Team projects and competitions</div>
        </div>
        <div class="item">
          <div class="num">Networking</div>
          <div class="desc">Connect with researchers and alumni</div>
        </div>
      </div>
    </div>

    <div class="right">
      <img src="/src/assets/ai-illustration.svg" alt="AI illustration" />
    </div>
  </div>
</section>

<style>
  .hero-inner{display:flex;gap:2rem;align-items:center}
  h1{font-size:2rem;margin:0 0 0.5rem}
  .lead{color:var(--muted);max-width:50ch}
  .cta-row{margin-top:1rem;display:flex;gap:0.6rem}
  .btn{padding:0.6rem 0.9rem;border-radius:8px;text-decoration:none;color:var(--text);font-weight:600}
  .primary{background:var(--accent);color:#071024}
  .ghost{border:1px solid rgba(255,255,255,0.06);background:transparent}

  .highlights{display:flex;gap:1rem;margin-top:1.6rem}
  .item{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:0.7rem;border-radius:8px}
  .num{font-weight:700}
  .desc{color:var(--muted);font-size:0.9rem}

  .right img{max-width:340px;width:100%;border-radius:12px;box-shadow:0 10px 30px rgba(2,6,23,0.6)}

  @media(max-width:900px){
    .hero-inner{flex-direction:column-reverse}
    .right img{max-width:320px}
  }
</style>
