'use client'
import DestinationCard from '../../components/DestinationCard'

const allDestinations = [
  { name: 'Paris', description: 'City of Light', color: 'pink' },
  { name: 'Tokyo', description: 'Land of the Rising Sun', color: 'lightblue' },
  { name: 'New York', description: 'Big Apple', color: 'lightgreen' },
  { name: 'London', description: 'The Old Smoke', color: 'lightyellow' },
  { name: 'Sydney', description: 'Harbour City', color: 'lightcoral' },
]

export default function DestinationsPage() {
  return (
    <div className="destinations px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center">All Destinations</h1>
      <p className="mb-6 text-lg text-center">
        Explore all the destinations we offer and plan your next adventure!
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {allDestinations.map((dest, i) => (
          <DestinationCard key={i} {...dest} />
        ))}
      </div>
    </div>
  )
}
