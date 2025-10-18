'use client'
import Map from '../../components/Map'
import DestinationCard from '../../components/DestinationCard'

const destinations = [
  { name: 'Paris', description: 'City of Light', color: 'pink' },
  { name: 'Tokyo', description: 'Land of the Rising Sun', color: 'lightblue' },
  { name: 'New York', description: 'Big Apple', color: 'lightgreen' },
]

export default function PlanTripPage() {
  return (
    <div className="plan-trip px-6 py-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Plan Your Trip</h1>

      <p className="mb-6 text-lg text-center">
        Select your destinations and explore them interactively on the map.
      </p>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          {destinations.map((dest, i) => (
            <DestinationCard key={i} {...dest} />
          ))}
        </div>
        <div className="md:w-1/2 rounded-lg shadow-lg overflow-hidden">
          <Map />
        </div>
      </div>
    </div>
  )
}
