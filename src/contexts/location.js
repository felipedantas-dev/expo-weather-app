import { useState, createContext } from "react";

export const LocationContext = createContext({});

function LocationProvider ({children}) {

    const [location, setLocation] = useState(undefined);
    const [cityName, setCityName] = useState(null);

    return (
        <LocationContext.Provider value={{ location, setLocation, cityName, setCityName }}>
            {children}
        </LocationContext.Provider>
    )
}

export default LocationProvider;