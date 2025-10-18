'use client'
import { useEffect, useState } from 'react'
import Sidebar from '../../components/Sidebar'

export default function AboutPage() {
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
    <div className="about-container flex">
      <Sidebar />
      <div className="about-content flex-1 p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-6" style={{ color }}>About Travel Map</h1>
        <p className="mb-4">
          Travel Map is a unique, interactive, and modern platform designed for travelers&apos; explorers, and adventure enthusiasts. 
          The goal is to combine planning, visualization, and inspiration in one place.
        </p>
        <p className="mb-4">
          Traveling is more than just visiting places; it&apos;s about experiencing cultures, tasting different cuisines, connecting with people, and creating unforgettable memories.
        </p>
        <p className="mb-4">
          This platform allows you to add destinations, create itineraries, and view them interactively on the map. 
          The RGB dynamic theme makes the interface colorful, lively, and engaging.
        </p>
        <p className="mb-4">
          Right sidebar links make navigation smooth across Home, Plan Trip, Destinations, About, and Contact pages. 
          Travel Map is built with Next.js 15 using app directory, modern architecture, and fast performance.
        </p>
        <p className="mb-4">
          Whether you are planning a weekend getaway or a months-long adventure, Travel Map helps you organize, visualize, and enjoy your trips effortlessly.
        </p>
        <p className="font-bold mt-6 text-lg">Start your adventure today and explore the world with Travel Map!</p>
      </div>
    </div>
  )
}
