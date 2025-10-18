import './globals.css'
import Sidebar from '../components/Sidebar'
import ThemeSwitcher from '../components/ThemeSwitcher'

export const metadata = {
  title: 'Travel Map',
  description: 'Interactive Travel Planner with dynamic RGB theme',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="app-container flex min-h-screen">
          {/* Main content */}
          <div className="flex-1 p-6">
            <ThemeSwitcher />
            {children}
          </div>

          {/* Right Sidebar */}
          <Sidebar />
        </div>
      </body>
    </html>
  )
}
