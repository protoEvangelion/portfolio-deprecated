import React, { PropTypes } from 'react'

export const WikiArticle = () => {
	const { value, onIncreaseClick } = this.props
	return 	(
			<div>
				<span>{value}</span>
				<button onClick={onIncreaseClick}>Increase</button>
			</div>
		)
}

WikiArticle.propTypes = {
	value: PropTypes.number.isRequired,
	onIncreaseClick: PropTypes.func.isRequired
}	


	// const snippetList = data.map((snippet, i) =>
	// 	<div key={`d${i}`} className="snippet">
	// 		<p key={`p${i}`} id={`q${i}`}>{snippet.title}</p>
	// 		<a key={`a${i}`} className={`a${i}`} href={`${url}${snippet.title}`}>
	// 			<p key={`t${i}`} id={`s${i}`}>{snippet.snippet.replace(/<\/?[^>]+(>|$)/g, '')}</p>
	// 		</a>
	// 	</div>
	// )
	// 	return 	(
	// 		<div>{snippetList}</div>
	// 	)