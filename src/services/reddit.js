//services are stateless
//they are designed to abstract complex data stuff
import _ from 'lodash'

const REDDIT_ENDPOINT = 'https://www.reddit.com'

class RedditService {

	async getDefaultSubreddits() {
		const url = `${REDDIT_ENDPOINT}/subreddits/default.json`
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json'
			}
		})
		if (!response.ok) {
			throw new Error(`RedditService getDefaultSubreddits failed, HTTP status ${response.status}`)
		}

		const data = await response.json()
		const children = _.get(data, 'data.children')
		if (!children) {
			throw new Error('RedditService getDefaultSubreddits failed, children not returned')
		}
		return _.map(children, (subreddit) => {
			return {
				title: _.get(subreddit, 'data.display.name'),
				description: _.get(subreddit, 'data.public_description'),
				url: _.get(subreddit, 'data.url')
			}
		})
	}
}

export default new RedditService()