import React from 'react'

export default function RegionKey() {
  return (
    <div className="row my-3">
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-info"></span> = Americas
      </div>
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-success"></span> = Africa
      </div>
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-warning"></span> = Asia
      </div>
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-danger"></span> = Europe
      </div>
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-primary"></span> = Oceania
      </div>
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-white"></span> = Polar
      </div>
      <div className="col-md-3 col-sm-4 mb-2">
        <span className="px-3 mr-2 bg-secondary"></span> = none
      </div>
    </div>
  )
}
