'use client'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default icon issue
// eslint-disable-next-line @typescript-eslint/no-explicit-any
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
})

// World countries coordinates
interface Country {
  name: string
  lat: number
  lng: number
}

const countries: Country[] = [
  { name: 'Pakistan', lat: 30.3753, lng: 69.3451 },
  { name: 'India', lat: 20.5937, lng: 78.9629 },
  { name: 'United Arab Emirates', lat: 23.4241, lng: 53.8478 },
  { name: 'China', lat: 35.8617, lng: 104.1954 },
  { name: 'South Africa', lat: -30.5595, lng: 22.9375 },
  { name: 'United States', lat: 37.0902, lng: -95.7129 },
  { name: 'Brazil', lat: -14.2350, lng: -51.9253 },
  { name: 'Australia', lat: -25.2744, lng: 133.7751 },
  { name: 'United Kingdom', lat: 55.3781, lng: -3.4360 },
  { name: 'France', lat: 46.2276, lng: 2.2137 },
  { name: 'Germany', lat: 51.1657, lng: 10.4515 },
  { name: 'Russia', lat: 61.5240, lng: 105.3188 },
  { name: 'Japan', lat: 36.2048, lng: 138.2529 },
  { name: 'Egypt', lat: 26.8206, lng: 30.8025 },
  { name: 'Canada', lat: 56.1304, lng: -106.3468 },
  { name: 'Mexico', lat: 23.6345, lng: -102.5528 },
  { name: 'Italy', lat: 41.8719, lng: 12.5674 },
  { name: 'Spain', lat: 40.4637, lng: -3.7492 },
  { name: 'Argentina', lat: -38.4161, lng: -63.6167 },
  { name: 'New Zealand', lat: -40.9006, lng: 174.8860 },
]

export default function Map() {
  return (
    <div className="map-wrapper mt-12">
      <MapContainer
        center={[20, 0] as [number, number]}
        zoom={2}
        scrollWheelZoom={true}
        style={{ height: '600px', width: '100%', borderRadius: '10px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {countries.map((country) => (
          <Marker
            key={country.name}
            position={[country.lat, country.lng] as [number, number]}
          >
            <Popup>{country.name}</Popup>
          </Marker>
        ))}
      </MapContainer>

      <style jsx>{`
        .map-wrapper {
          max-width: 1200px;
          margin: auto;
        }
      `}</style>
    </div>
  )
}
