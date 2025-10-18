'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'

// Map component کو dynamic import کریں تاکہ SSR میں error نہ آئے
const DynamicMap = dynamic(() => import('../components/Map'), { ssr: false })

export default function HomePage() {
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
    <div className="home-container flex">
      <Sidebar />
      <div className="home-content flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6" style={{ color }}>
          Welcome to Travel Map
        </h1>
        <p className="mb-4">
          Explore destinations, plan trips, and enjoy interactive world maps with Travel Map&apos;s unique RGB dynamic theme.
        </p>
        <DynamicMap />
      </div>
    </div>
  )
}
