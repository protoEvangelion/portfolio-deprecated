import React from 'react'
import Radium from 'radium'

const styles = {
}

let Footer = () => {
  return (
    <div>
      <p>
				Units: Billions of US Dollars (y axis) and Yearly quarters (x axis)
			</p>
      <a href="https://www.bea.gov/API/docs/index.htm" alt="data source">
        Data Source
      </a>
    </div>
  )
}

export default Footer = Radium(Footer)
