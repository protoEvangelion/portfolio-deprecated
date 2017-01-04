import React from 'react'

const Image = (props) => {
	return (
		<div className="container">
     <div className="row">
       <div className="col-xs-10 col-xs-offset-1">
        <img 
        	className="img-responsive img-rounded" 
        	id="header" 
        	alt="Quote Pump" 
        	src={props.url} />
       </div>
      </div>
    </div>
	)
}

export default Image

