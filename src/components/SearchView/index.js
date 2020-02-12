import React, { useState } from 'react'
import styled from 'styled-components'
import { Row } from 'griding'
import { useStorageString } from '../../utils/useStorageString'
import Search from '../Searchbar'
import Container from '../Container'
import Text from '../Text'
import Cards from './Cards'
import Rating from '../Rating'

const Wrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
`

const Searchbar = styled(Search)`
	position: sticky;
	top: 0.875rem;
	z-index: 3;
	margin-bottom: 1rem;
`

/* eslint-disable no-mixed-operators */
const SearchView = () => {
	const [search, setSearch] = useStorageString('search', '')
	//const [rating, setRating] = useStorageString('rating', 0)
	const [rating, setRating] = useState(0)

	return(
		<Wrapper>
			<Searchbar
				value={search}
				onChange={e => {setSearch(e.target.value)}}
			/>
			<Container>
				<Rating rating={rating} onChange={setRating} />
			</Container>
			<Container>
				{(!search.length) && <Text weight={600} xs={1} sm={2} md={3} xg={3}>Featured movies</Text>}
				<Row vertical-gutter style={{marginTop: '2rem', marginBottom: '2rem', position: 'relative'}}>
					<Cards search={search} rating={rating} />
				</Row>
			</Container>
		</Wrapper>
	)
}
/* eslint-enable no-mixed-operators */

export default SearchView
