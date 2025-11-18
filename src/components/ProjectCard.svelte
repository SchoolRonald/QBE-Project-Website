<script>
  export let project

  const descriptionFallback = 'Project details coming soon.'

  $: title = project?.title || 'Untitled Project'
  $: description = project?.description || descriptionFallback
  $: hasMembers = Array.isArray(project?.members) && project.members.length > 0
  $: memberList = hasMembers ? project.members.join(', ') : 'TBD'

  $: hasTechnologies = Array.isArray(project?.technologies) && project.technologies.length > 0
  $: techList = hasTechnologies ? project.technologies.join(', ') : 'TBD'
</script>

<article class="card">
  <div class="title">{title}</div>
  <p class="desc">{description}</p>
  <div class="details">
    <div class="members">
      <strong>Members:</strong> {memberList}
    </div>
    <div class="tech">
      <strong>Technologies:</strong> {techList}
    </div>
  </div>
  <div class="actions">
    {#if project.github_url}
      <a class="btn" href={project.github_url} target="_blank" rel="noopener noreferrer">View on GitHub</a>
    {/if}
  </div>
</article>

<style>
  .card {
    background: var(--card);
    padding: 1.75rem;
    border-radius: 12px;
    border: 1px solid var(--border-subtle);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
  }

  .card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--accent);
    margin-bottom: 0.75rem;
  }

  .desc {
    flex-grow: 1;
    margin-bottom: 1rem;
    color: var(--text-secondary);
  }

  .details {
    font-size: 0.9rem;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }

  .members, .tech {
    margin-bottom: 0.5rem;
  }

  .actions {
    margin-top: auto;
  }

  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--accent);
    color: var(--bg);
    text-decoration: none;
    border-radius: 6px;
    font-weight: 500;
    transition: background 0.3s ease;
  }

  .btn:hover {
    background: var(--accent-hover);
  }
</style>
