'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Plan Trip', path: '/plan-trip' },
  { name: 'Destinations', path: '/destinations' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]

export default function Sidebar() {
  const pathname = usePathname()
  return (
    <aside className="w-32 bg-red-900 text-white flex flex-col p-4 fixed right-0 top-0 h-screen">
      {links.map(link => (
        <Link
          key={link.name}
          href={link.path}
          className={`p-2 my-1 rounded hover:bg-gray-700 transition-colors ${
            pathname === link.path ? 'bg-gray-600 font-bold' : ''
          }`}
        >
          {link.name}
        </Link>
      ))}
    </aside>
  )
}
