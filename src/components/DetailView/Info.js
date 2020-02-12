import React, { Fragment } from 'react'
import { Row, Cell } from 'griding'
import Section from './Section'
import Relation from './Relation'

const Info = ({...data}) => {
	const description = data?.overview || data?.biography
	const genres = data?.genres?.map(x => x.name) || []
	const actors = data?.credits?.cast || []
	const totalActors = data?.credits?.cast?.length || 0
	const directors = data?.credits?.crew?.filter(x => x.department === 'Directing') || []
	const totalDirectors = data?.credits?.crew?.filter(x => x.department === 'Directing')?.length || 0

	return (
		<Fragment>
			{description && <Section title='Plot'>{description}</Section>}
			<Row style={{justifyContent: 'space-between'}}>
				{!!totalActors && (
					<Cell xs={12} md={6}>
						<Section title='Actors'>
							{actors.map(actor => <Relation key={actor?.id} {...actor}/>)}
						</Section>
					</Cell>
				)}
				<Cell xs={12} md={6}>
					{!!genres.length && (
						<Section title='Genres'>
							{genres.map(genre => <div key={genre}>{genre}</div>)}
						</Section>
					)}
					{!!totalDirectors && (
						<Section title='Directors'>
							{directors.map(director => <Relation key={director.id} {...director}/>)}
						</Section>
					)}
				</Cell>
			</Row>
		</Fragment>
	)
}

export default Info
