import React from 'react'
import {Link} from 'react-router-dom'
import classNames from 'classnames'

export default function CountryItem({
  country: {name, alpha3Code, capital, region, flag}
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-6">
          <h4
            className={classNames({
              'mb-3': true,
              'text-info': region === 'Americas',
              'text-success': region === 'Africa',
              'text-warning': region === 'Asia',
              'text-danger': region === 'Europe',
              'text-primary': region === 'Oceania',
              'text-white': region === 'Polar',
              'text-secondary': !region
            })}
          >
            {name}
          </h4>
          <p>
            Region: <span className="h6">{region}</span>
          </p>
          <p>
            Capital: <span className="h6">{capital}</span>
          </p>
        </div>
        <div className="col-md-3 mb-4">
          <img
            src={flag}
            alt="flag"
            style={{
              width: '100%',
              maxWidth: '150px',
              height: 'auto'
            }}
          />
        </div>
        <div className="col-md-3 text-right">
          <Link to={`/country/${alpha3Code}`} className="btn btn-secondary">
            Country Details
          </Link>
        </div>
      </div>
    </div>
  )
}
