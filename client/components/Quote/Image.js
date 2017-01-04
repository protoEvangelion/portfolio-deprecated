import React from 'react'

const Image = (props) => {
	return (
  <div className="row">
	  <div className="col-xs-6 col-xs-offset-3">  
	    <img 
	    	className="img-responsive img-rounded center-block" 
	    	id="header" 
	    	alt="Quote Pump"
	    	style={{marginLeft: '10px'}} 
	    	src={props.url} />
		</div>
	</div>
	)
}

export default Image

