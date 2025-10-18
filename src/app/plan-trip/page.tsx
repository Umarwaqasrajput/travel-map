'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'
import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false })

export default function PlanTripPage() {
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
    <div className="plan-trip-container flex">
      <Sidebar />
      <div className="plan-trip-content flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6" style={{ color }}>
          Plan Your Trip
        </h1>
        <p className="mb-4">
          Plan your next adventure with interactive maps, explore destinations, and enjoy Travel Map&apos;s dynamic RGB theme.
        </p>
        <DynamicMap />
      </div>
    </div>
  )
}
