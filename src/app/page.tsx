'use client'
import Map from '../components/Map'
import { useEffect, useState } from 'react'

export default function HomePage() {
  const [color, setColor] = useState('rgb(255,0,0)')

  // RGB dynamic theme
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
    <div className="home-page px-6 py-8">
      <h1 className="text-5xl font-extrabold mb-6" style={{ color }}>
        Welcome to Travel Map
      </h1>
      <p className="text-lg mb-6">
        Plan your trips interactively across the world. Explore new destinations, add them to your itinerary,
        and enjoy a visually stunning map experience.
      </p>

      <div className="flex flex-wrap gap-4 mb-8">
        <a href="/plan-trip" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all">
          Plan a Trip
        </a>
        <a href="/destinations" className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg transition-all">
          Explore Destinations
        </a>
      </div>

      <div className="map-container rounded-lg shadow-lg overflow-hidden">
        <Map />
      </div>

      <style jsx>{`
        .home-page {
          max-width: 1200px;
          margin: auto;
        }
        p {
          line-height: 1.7;
        }
        .map-container {
          height: 500px;
        }
      `}</style>
    </div>
  )
}
