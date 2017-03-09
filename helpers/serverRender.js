import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext } from 'react-router'
import Home from '../client/components/Main/Home'

module.exports = {
	serverRender: (renderProps) => {
		return renderToString(<RouterContext {...renderProps}/>)
	}
}
