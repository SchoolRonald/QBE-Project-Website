<script>
  const leadership = [
    {name: 'Ronald Chu', role: 'President', email: 'rchu@mines.edu'},
    {name: 'Matthew Yamamoto', role: 'Vice President', email: 'matthew_yamamoto@mines.edu'}
  ]

  const officers = [
    {name: 'Joseph Kenrick', role: 'Director of Strategic Partnerships'},
    {name: 'Aragorn Wang', role: 'Research Officer'},
    {name: 'Jonah Reynolds', role: 'Treasurer'},
    {name: 'Manda Li', role: 'Outreach Chair'},
    {name: 'Dornu Irene', role: 'Platform Developer'},
    {name: 'Austin Truhn', role: 'Secretary'}
  ]

  const advisors = [
    {name: 'Dr. Zibo Wang', role: 'Faculty Advisor', url: 'https://cs.mines.edu/project/wang-zibo/'},
    {name: 'Dr. Bo Wu', role: 'Faculty Advisor', url: 'https://cs.mines.edu/project/wu-bo/'}
  ]
</script>

<section class="contact">
  <h2>Contact Us</h2>
  <p class="intro">If you have any questions or want to know more, reach out to one of our club leaders.</p>

  <div class="section">
    <h3>Club Leadership</h3>
    <div class="grid">
      {#each leadership as person}
        <div class="card">
          <div class="avatar">{person.name.split(' ').map(n => n[0]).join('')}</div>
          <div class="info">
            <div class="name">{person.name}</div>
            <div class="role">{person.role}</div>
            {#if person.email}
              <a href="mailto:{person.email}" class="email">{person.email}</a>
            {/if}
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="section">
    <h3>Other Officers</h3>
    <div class="grid">
      {#each officers as person}
        <div class="card">
          <div class="avatar">{person.name.split(' ').map(n => n[0]).join('')}</div>
          <div class="info">
            <div class="name">{person.name}</div>
            <div class="role">{person.role}</div>
          </div>
        </div>
      {/each}
    </div>
  </div>

  <div class="section">
    <h3>Club Advisors</h3>
    <div class="grid">
      {#each advisors as person}
        {#if person.url}
          <a href={person.url} target="_blank" rel="noopener noreferrer" class="card card-link">
            <div class="avatar">{person.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="info">
              <div class="name">{person.name}</div>
              <div class="role">{person.role}</div>
            </div>
          </a>
        {:else}
          <div class="card">
            <div class="avatar">{person.name.split(' ').map(n => n[0]).join('')}</div>
            <div class="info">
              <div class="name">{person.name}</div>
              <div class="role">{person.role}</div>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </div>
</section>

<style>
  .intro{color:var(--muted);margin-bottom:2rem}
  .section{margin-bottom:2.5rem}
  h3{
    font-size:1.2rem;
    margin-bottom:1rem;
    color:var(--accent);
    padding-bottom:0.5rem;
    border-bottom:2px solid rgba(255,183,3,0.3);
  }
  
  .grid{
    display:flex;
    flex-wrap:wrap;
    gap:1.5rem;
    justify-content:space-evenly;
  }

  .card{
    background:linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01));
    border:1px solid rgba(255,255,255,0.04);
    padding:1.5rem;
    border-radius:12px;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    transition:transform 0.2s, box-shadow 0.2s;
    width:280px;
    flex-shrink:0;
  }

  .card-link:hover{
    transform:translateY(-2px);
    box-shadow:0 8px 24px rgba(0,0,0,0.3);
    border-color:rgba(255,183,3,0.2);
  }

  .card-link{
    text-decoration:none;
    color:inherit;
    cursor:pointer;
  }

  .card-link:hover .name{
    color:var(--accent);
  }

  .avatar{
    width:80px;
    height:80px;
    border-radius:50%;
    background:linear-gradient(135deg, #ffb703, #fb8500);
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:700;
    font-size:1.4rem;
    color:#071024;
    margin-bottom:1rem;
  }

  .info{
    width:100%;
  }

  .name{
    font-weight:700;
    font-size:1.05rem;
    margin-bottom:0.3rem;
    transition:color 0.2s;
  }

  .role{
    color:var(--muted);
    font-size:0.9rem;
    margin-bottom:0.5rem;
  }

  .email{
    color:var(--accent);
    font-size:0.85rem;
    text-decoration:none;
    word-break:break-word;
    display:inline-block;
  }

  .email:hover{
    text-decoration:underline;
  }

  @media(max-width:640px){
    .grid{
      gap:1rem;
    }
    .card{
      width:100%;
      max-width:280px;
    }
    .card{
      max-width:100%;
    }
    .avatar{
      width:64px;
      height:64px;
      font-size:1.2rem;
    }
  }
</style>
