import React from 'react'

function CountryName() {
    const countries = [
        {
            country: "India",
            state: ["Raj", "UP", "MP"]
        },
        {
            country: "USA",
            state: ["California", "Texas", "Florida"]
        },
        {
            country: "Thailand",
            state: ["Nan", "Loei", "Bangkok"]
        },
        {
            country: "UK",
            state: ["Bristol", "Londan", "Manchester"]
        }
    ];
    return (
        <>
            <h1>List of Countries and States</h1>
            <ul>
                {countries.map((country, index) => (
                    <li key={index}>
                        Country: {country.country}
                        <ul>
                            {country.state.map((state, stateIndex) => (
                                <li key={stateIndex}>
                                State: {state}</li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>

        </>
    )
}

export default CountryName