'use client'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
  const [color, setColor] = useState('rgb(255,0,0)')

  useEffect(() => {
    const interval = setInterval(() => {
      const r = Math.floor(Math.random() * 256)
      const g = Math.floor(Math.random() * 256)
      const b = Math.floor(Math.random() * 256)
      const rgb = `rgb(${r},${g},${b})`
      setColor(rgb)
      document.body.style.backgroundColor = `rgb(${r},${g},${b},0.1)`
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-4 left-4 font-bold text-xl" style={{ color }}>
      Travel Map
    </div>
  )
}
