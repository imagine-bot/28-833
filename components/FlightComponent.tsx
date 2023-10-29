import React from 'react';

interface FlightProps {
    time: string;
    networkSignal: string;
    flightName: string;
    flightNumber: string;
    fromCity: string;
    fromState: string;
    fromGate: string;
    fromAirport: string;
    fromDate: string;
    fromStatus: string;
    toCity: string;
    toState: string;
    toGate: string;
    toAirport: string;
    toDate: string;
    toStatus: string;
    elapsed: string;
    totalTravel: string;
    remaining: string;
    flownMiles: number;
    remainingMiles: number;
}

const FlightComponent: React.FC<FlightProps> = (props) => {
    return (
        <div className="font-sans p-6">
            <div className="flex justify-between">
                <p>{props.time}</p>
                <div className="flex items-center">
                    <p>{props.networkSignal}</p>
                    <div className="bg-green-500 rounded-full w-5 h-5 ml-2"></div>
                </div>
            </div>
            <div className="bg-blue-600 p-4 text-white mt-4">
                <h2>FlightAware</h2>
                <input type="text" placeholder="Search for flight, tail, airport, or city" className="mt-2 p-2 w-full" />
            </div>
            <div className="mt-4">
                <h2 className="text-xl">{props.flightName}</h2>
                <p>{props.flightNumber}</p>
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <h3 className="text-lg">{props.fromCity}</h3>
                    <p>{props.fromState}</p>
                    <p>{props.fromGate}</p>
                    <p>{props.fromAirport}</p>
                    <p>{props.fromDate}</p>
                    <p>{props.fromStatus}</p>
                </div>
                <div>
                    <h3 className="text-lg">{props.toCity}</h3>
                    <p>{props.toState}</p>
                    <p>{props.toGate}</p>
                    <p>{props.toAirport}</p>
                    <p>{props.toDate}</p>
                    <p>{props.toStatus}</p>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <div>
                    <h3 className="text-lg">{props.elapsed}</h3>
                    <p>elapsed</p>
                </div>
                <div>
                    <h3 className="text-lg">{props.totalTravel}</h3>
                    <p>total travel time</p>
                </div>
                <div>
                    <h3 className="text-lg">{props.remaining}</h3>
                    <p>remaining</p>
                </div>
            </div>
            <div className="flex justify-between mt-4">
                <p>{props.flownMiles} mi flown</p>
                <p>{props.remainingMiles} mi to go</p>
            </div>
            <div className="mt-4">
                <p>NOT YOUR FLIGHT? UAL548 flight schedule</p>
            </div>
            <div className="bg-gray-500 p-4 text-white mt-4">
                <h4 className="text-lg">Tired of seeing ads?</h4>
                <button className="mt-2 p-2 bg-blue-600 text-white">Upgrade to the ad-free FlightAware app</button>
            </div>
        </div>
    );
}

export default FlightComponent;