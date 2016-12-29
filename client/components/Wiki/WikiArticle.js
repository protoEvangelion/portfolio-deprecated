import React from 'react'

function WikiArticle(props) {
	let data = props.snippets
	let url = 'https://en.wikipedia.org/wiki/'
	return 	(
			<div>Hello</div>
		)
}

WikiArticle.propTypes = {
	snippets: React.PropTypes.object
}

export default WikiArticle

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