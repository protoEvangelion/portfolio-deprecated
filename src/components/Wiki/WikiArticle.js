import React from 'react'

const WikiArticle = (props) => (

	<p>{props.snippets}</p>
)

WikiArticle.propTypes = {
	snippets: React.PropTypes.array
}

export default WikiArticle