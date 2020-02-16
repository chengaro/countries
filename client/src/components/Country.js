import React from 'react'
import {useQuery} from '@apollo/react-hooks'
import {gql} from 'apollo-boost'
import {Link} from 'react-router-dom'

let COUNTRY_QUERY = gql`
  query CountryQuery($alpha3Code: String!) {
    country(alpha3Code: $alpha3Code) {
      name
      capital
      alpha3Code
      region
      subregion
      population
      flag
      currencies {
        name
        code
      }
      languages {
        name
      }
    }
  }
`

export default function Country(props) {
  let {alpha3Code} = props.match.params
  alpha3Code = (alpha3Code + '').replace(/[\\"']/g, '\\$&')

  const {loading, error, data} = useQuery(COUNTRY_QUERY, {
    variables: {alpha3Code: alpha3Code}
  })

  if (loading) return <h4>Loading...</h4>
  if (error) return <h4>ERROR: no such country</h4>

  const {
    name,
    capital,
    region,
    subregion,
    population,
    languages,
    currencies,
    flag
  } = data.country

  return (
    <div className="my-3">
      <div className="row">
        <div className="col-sm-6">
          <h1 className="display-4 my-3">{name}</h1>
        </div>
        <div className="col-sm-6">
          <img src={flag} alt="flag" className="img-fluid img-thumbnail" />
        </div>
      </div>
      <h4 className="mb-3">Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Region: {region}</li>
        <li className="list-group-item">Subregion: {subregion}</li>
        <li className="list-group-item">Capital: {capital}</li>
        <li className="list-group-item">
          Population: {new Intl.NumberFormat().format(population)}
        </li>
        <li className="list-group-item">Code: {alpha3Code}</li>
      </ul>
      <h4 className="my-3">Languages</h4>
      <ul className="list-group">
        {languages.map(language => {
          return <li className="list-group-item">{language.name}</li>
        })}
      </ul>
      <h4 className="my-3">Currencies</h4>
      <ul className="list-group">
        {currencies.map(currency => {
          return (
            <li className="list-group-item">
              {currency.name} ({currency.code})
            </li>
          )
        })}
      </ul>
      <hr />
      <Link to="/" className="btn btn-secondary">
        Back
      </Link>
    </div>
  )
}
