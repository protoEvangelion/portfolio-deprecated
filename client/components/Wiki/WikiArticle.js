import React from 'react'

function WikiArticle(props) {
	let data = JSON.parse(props.snippets)
	let url = 'https://en.wikipedia.org/wiki/'

	const snippetList = data.map((snippet, i) =>
		<div key={`d${i}`} className="snippet">
			<p key={`p${i}`} id={`q${i}`}>{snippet.title}</p>
			<a key={`a${i}`} className={`a${i}`} href={`${url}${snippet.title}`}>
				<p key={`t${i}`} id={`s${i}`}>{snippet.snippet.replace(/<\/?[^>]+(>|$)/g, '')}</p>
			</a>
		</div>
	)
	console.log('here is my data ', data)
		return 	(
			<div>{snippetList}</div>
		)

}

WikiArticle.propTypes = {
	snippets: React.PropTypes.string
}

export default WikiArticle