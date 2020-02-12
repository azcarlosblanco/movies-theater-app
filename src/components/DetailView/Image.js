import React from 'react'
import styled from 'styled-components'
import { Movie } from '../Icon'
import AspectRatio from '../AspectRatio'

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Wrapper = styled(AspectRatio)`
	overflow: hidden;
	object-fit: cover;
	border-radius: 0.25rem;
	background-color: ${p => p.theme.colors.grey};
	img{
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`

const Img = styled.img`
	display: block;
	min-height: 100%;
	object-fit: cover;
	transition: 0.2s filter;
	${p => p.loading && `filter: blur(0.5px)`}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`
// ? <img alt={alt} src={`https://image.tmdb.org/t/p/w500/${image}`}/>

const Image = ({alt, image}) => (
	<Wrapper ratio={image ? 0.75 : 1}>
		{image
			? (
				<Img src={`https://image.tmdb.org/t/p/w1280/${image}`} />
			) : (
				<NoImage>
					<Movie size={96} strokeWidth={1.125}/>
				</NoImage>
			)
		}
	</Wrapper>
)

export default Image
