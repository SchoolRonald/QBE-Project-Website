/**
 * Date and time formatting utilities
 */

/**
 * Format a date string for display
 * @param {string} dateStr - ISO date string or 'TBD'
 * @param {Object} options - Intl.DateTimeFormat options
 * @returns {string} Formatted date string
 */
export function formatDate(dateStr, options = { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' }) {
  if (dateStr === 'TBD') return 'TBD'
  const date = new Date(dateStr)
  return date.toLocaleDateString('en-US', options)
}

/**
 * Convert 24-hour time to 12-hour format with AM/PM
 * @param {string} timeStr - Time in HH:MM format
 * @returns {string} Time in 12-hour format (e.g., "6:00 PM")
 */
export function formatTime(timeStr) {
  if (!timeStr) return null
  const [hours, minutes] = timeStr.split(':')
  const hour = parseInt(hours)
  const ampm = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour % 12 || 12
  return `${displayHour}:${minutes} ${ampm}`
}

/**
 * Format a time range for display
 * @param {string} startTime - Start time in HH:MM format
 * @param {string} endTime - End time in HH:MM format
 * @returns {string|null} Formatted time range (e.g., "6:00 PM - 8:00 PM")
 */
export function formatTimeRange(startTime, endTime) {
  if (!startTime || !endTime) return null
  return `${formatTime(startTime)} - ${formatTime(endTime)}`
}

/**
 * Combine date and time range into single display string
 * @param {Object} event - Event object with date, start_time, end_time
 * @returns {string} Combined datetime string
 */
export function formatDateTime(event) {
  const date = formatDate(event.date)
  const time = formatTimeRange(event.start_time, event.end_time)
  return time ? `${date} • ${time}` : date
}

/**
 * Get formatted date and time as separate values
 * @param {Object} event - Event object with date, start_time, end_time
 * @returns {{date: string, time: string|null}} Object with separate date and time
 */
export function getDateAndTime(event) {
  return {
    date: formatDate(event.date),
    time: formatTimeRange(event.start_time, event.end_time)
  }
}

/**
 * Check if a date is in the past (before today)
 * @param {string} dateStr - ISO date string or 'TBD'
 * @returns {boolean} True if date is in the past
 */
export function isPastDate(dateStr) {
  if (dateStr === 'TBD') return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const eventDate = new Date(dateStr)
  eventDate.setHours(0, 0, 0, 0)
  return eventDate < today
}

/**
 * Check if a date is today or in the future
 * @param {string} dateStr - ISO date string or 'TBD'
 * @returns {boolean} True if date is today or upcoming
 */
export function isUpcomingDate(dateStr) {
  if (dateStr === 'TBD') return true
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const eventDate = new Date(dateStr)
  eventDate.setHours(0, 0, 0, 0)
  return eventDate >= today
}

/**
 * Sort events by date (earliest first), with TBD events at the end
 * @param {Object} a - First event
 * @param {Object} b - Second event
 * @returns {number} Sort order
 */
export function sortByDateAsc(a, b) {
  if (a.date === 'TBD') return 1
  if (b.date === 'TBD') return -1
  return new Date(a.date) - new Date(b.date)
}

/**
 * Sort events by date (latest first)
 * @param {Object} a - First event
 * @param {Object} b - Second event
 * @returns {number} Sort order
 */
export function sortByDateDesc(a, b) {
  return new Date(b.date) - new Date(a.date)
}
