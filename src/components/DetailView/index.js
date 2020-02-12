import React from 'react'
import styled from 'styled-components'
import { useFetch } from 'react-hooks-fetch'
import { Row, Cell } from 'griding'
import Container from '../Container'
import Text from '../Text'
import Info from './Info'
import Image from './Image'
import { BASE_API, API_KEY } from '../../utils/api'

const Wrapper = styled.div`
	flex: 1
	display: flex;
	flex-direction: column;
	transition: 0.2s all;
	margin-bottom: ${p => p.error ? 0 : '6rem'};
`

const DetailView = ({id}) => {
	const { error, loading, data } = useFetch([
		`${BASE_API}/movie/${id}`,
		`?api_key=${API_KEY}`,
		`&append_to_response=release_dates,external_ids,credits,content_ratings`
	].join(''))

	const title = data?.title || data?.name
	const image = data?.poster_path || data?.profile_path

	return(
		<Wrapper error={error}>
			<Container>
				{!loading && data && (
					<Row vertical-gutter style={{justifyContent: 'space-between'}}>
						<Cell xs={12} md={6} style={{marginBottom: '1.5rem'}}>
							<Text weight={600} xs={2} sm={3} md={4} xg={5}>{title}</Text>
							<Info {...data}/>
						</Cell>
						<Cell xs={12} sm={12} md={5} lg={5}>
							<Image alt={`poster for: ${title}`} image={image}/>
						</Cell>
					</Row>
				)}
			</Container>
			{error && (
				<Container style={{flex: 1}}>
					Fetch Error
				</Container>
			)}
		</Wrapper>
	)
}

export default DetailView
