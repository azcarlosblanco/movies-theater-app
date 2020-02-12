import React, { Fragment } from 'react'
import { useFetch } from 'react-hooks-fetch'
import { Cell } from 'griding'
import Card from '../Card'
import { BASE_API, API_KEY } from '../../utils/api'

const getDataURL = (search) => {
	if(!search.length) return ([
		`${BASE_API}/discover/movie`,
		`?api_key=${API_KEY}`
	])

	return ([
		`${BASE_API}/search/movie`,
		`?api_key=${API_KEY}`,
		`&query=${search}`
	])
}

const Cards = ({search, rating}) => {
	const { loading, data, error } = useFetch(getDataURL(search).join(''))

	const filterByRating = (movies) => {
		if (!rating) return movies
		return movies.filter(e => e.vote_average <= rating && e.vote_average >= (rating - 2) )
	}
	
	if(error && search) return (
		<Cell xs={12}>Fetch Error</Cell>
	)

	if(loading) return (Array(20).fill(0).map((x, i) => (
		<Cell key={i} xs={6} sm={4} md={3} xg={2}><Card key={i} loading/></Cell>
	)))

	if(data && !data?.results?.length) return (
		<Cell xs={12}>No Results Found</Cell>
	)

	if(!data?.results?.length) return null

	return (
		<Fragment>
			{data && filterByRating(data?.results).map(entry => (
				<Cell key={entry.id} xs={6} sm={4} md={3} xg={2}>
					<Card {...entry}/>
				</Cell>
			))}
		</Fragment>
	)
}

export default Cards
