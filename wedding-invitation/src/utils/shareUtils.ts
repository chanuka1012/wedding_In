export async function shareInvitation(title: string, text: string) {
  const data = { title, text, url: window.location.href }
  if (navigator.share) { await navigator.share(data); return 'Shared' }
  await navigator.clipboard.writeText(window.location.href)
  return 'Link copied'
}
