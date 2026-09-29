import { useCallback, useEffect, useState } from 'react'

export interface Countdown { days: number; hours: number; minutes: number; seconds: number; complete: boolean }
const initial: Countdown = { days: 0, hours: 0, minutes: 0, seconds: 0, complete: false }

export function useCountdown(date: string, time: string) {
  const calculate = useCallback((): Countdown => {
    const difference = new Date(`${date}T${time}:00+05:30`).getTime() - Date.now()
    if (difference <= 0) return { ...initial, complete: true }
    return {
      days: Math.floor(difference / 86400000),
      hours: Math.floor((difference / 3600000) % 24),
      minutes: Math.floor((difference / 60000) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      complete: false,
    }
  }, [date, time])
  const [remaining, setRemaining] = useState(calculate)
  useEffect(() => { const id = window.setInterval(() => setRemaining(calculate()), 1000); return () => window.clearInterval(id) }, [calculate])
  return remaining
}
