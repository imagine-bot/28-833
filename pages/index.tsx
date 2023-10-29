import Image from 'next/image'
import { Inter } from 'next/font/google'
import FlightComponent from '../components/FlightComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <FlightComponent 
        time="12:00 PM"
        networkSignal="Good"
        flightName="Flight 123"
        flightNumber="123"
        fromCity="New York"
        fromState="NY"
        fromGate="A1"
        fromAirport="JFK"
        fromDate="2022-12-31"
        fromStatus="On Time"
        toCity="Los Angeles"
        toState="CA"
        toGate="B1"
        toAirport="LAX"
        toDate="2022-12-31"
        toStatus="On Time"
        elapsed="2h"
        totalTravel="5h"
        remaining="3h"
        flownMiles={1000}
        remainingMiles={2000}
      />
    </main>
  )
}