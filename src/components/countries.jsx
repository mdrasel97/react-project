import React, { use } from 'react';
import Country from './country';

const Countries = ({promiseFetch}) => {
    const countries = use(promiseFetch);
    console.log(countries)
    return (
        <div>
            <h1>Travelling Countris- {countries.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-3'>
            {
                countries.map(country => <Country key={country.cca3} country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;