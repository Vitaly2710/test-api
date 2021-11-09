import React, { useState } from 'react';
import { useEffect } from 'react';
import { fetchCountry } from './counterAPI';
import { Answer, Capital } from './Type';

export function Country(params:any): any {
    
    const [stateLength, setStateLength] = useState<string | null>(null)
    const [stateCountryInformation, setStateCountryInformation] = useState<number>()
    const getCountry = async () => {
        const {length} = await fetchCountry()
        setStateLength(length)
        const {area} = await fetchCountry()
        setStateCountryInformation(area)
        console.log(stateCountryInformation)
        
    };
    
    useEffect(() => {
        getCountry()
    }, [])

    return (
        <div>
            <p>
                Hello {stateLength}
            </p>    
            info {stateCountryInformation};
        </div>
    )
}