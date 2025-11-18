<script>
  import EventCard from '../components/EventCard.svelte'
  import eventsData from '../data/events.json'

  // Transform events object into array with names
  const allEvents = Object.entries(eventsData).map(([name, data]) => ({
    title: name,
    date: data.date,
    start_time: data.start_time,
    end_time: data.end_time,
    location: data.location,
    desc: data.description
  }))

  // Get today's date at midnight for comparison
  const today = new Date()
  today.setHours(0, 0, 0, 0)

  // Separate into upcoming and past
  const upcomingEvents = allEvents
    .filter(e => {
      if (e.date === 'TBD') return true // TBD events are upcoming
      const eventDate = new Date(e.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate >= today
    })
    .sort((a, b) => {
      if (a.date === 'TBD') return 1 // TBD goes to end
      if (b.date === 'TBD') return -1
      return new Date(a.date) - new Date(b.date)
    })

  const pastEvents = allEvents
    .filter(e => {
      if (e.date === 'TBD') return false // TBD is never past
      const eventDate = new Date(e.date)
      eventDate.setHours(0, 0, 0, 0)
      return eventDate < today
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))

  // Format date for display
  function formatDate(dateStr) {
    if (dateStr === 'TBD') return 'TBD'
    const date = new Date(dateStr)
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
  }

  // Format time (HH:MM to 12-hour format)
  function formatTime(timeStr) {
    const [hours, minutes] = timeStr.split(':')
    const hour = parseInt(hours)
    const ampm = hour >= 12 ? 'PM' : 'AM'
    const displayHour = hour % 12 || 12
    return `${displayHour}:${minutes} ${ampm}`
  }

  // Format time range
  function formatTimeRange(start, end) {
    if (!start || !end) return null
    return `${formatTime(start)} - ${formatTime(end)}`
  }

  // Format datetime display (date + time on same line)
  function formatDateTime(e) {
    const date = formatDate(e.date)
    const time = formatTimeRange(e.start_time, e.end_time)
    return time ? `${date} • ${time}` : date
  }
</script>

<section>
  <h2>Events</h2>
  <p class="muted">Join us for workshops, talks, and collaborative project nights. RSVP using OreConnect.</p>

  <div class="section">
    <h3>Upcoming Events</h3>
    {#if upcomingEvents.length > 0}
      <div class="grid">
        {#each upcomingEvents as e}
          <EventCard e={{...e, datetime: formatDateTime(e)}} isPast={false} />
        {/each}
      </div>
    {:else}
      <p class="muted">No upcoming events scheduled. Check back soon!</p>
    {/if}
  </div>

  <div class="section">
    <h3>Past Events</h3>
    {#if pastEvents.length > 0}
      <div class="grid">
        {#each pastEvents as e}
          <EventCard e={{...e, datetime: formatDateTime(e)}} isPast={true} />
        {/each}
      </div>
    {:else}
      <p class="muted">No past events yet.</p>
    {/if}
  </div>
</section>

<style>
  h2{font-size:1.4rem;margin-bottom:0.5rem}
  h3{
    font-size:1.2rem;
    margin-bottom:1rem;
    color:var(--accent);
    padding-bottom:0.5rem;
    border-bottom:2px solid rgba(255,183,3,0.3);
  }
  .muted{color:var(--muted);margin-bottom:2rem}
  .section{margin-bottom:2.5rem}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
</style>
