import React from 'react'
import {gql} from 'apollo-boost'
import {useQuery} from '@apollo/react-hooks'
import RegionKey from './RegionKey'
import CountryItem from './CountryItem'

const COUNTRIES_QUERY = gql`
  {
    countries {
      name
      capital
      region
      flag
      alpha3Code
    }
  }
`

export default function Countries() {
  const {loading, error, data} = useQuery(COUNTRIES_QUERY)
  return (
    <>
      <div className="row">
        <div className="col-10 offset-1">
          <h1 className="display-4 my-3">Countries</h1>
          <RegionKey />
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>Error while requesting data</p>
          ) : (
            data.countries.map(country => (
              <CountryItem key={country.alpha3Code} country={country} />
            ))
          )}
        </div>
      </div>
    </>
  )
}
