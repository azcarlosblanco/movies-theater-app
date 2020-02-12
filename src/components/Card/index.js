import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import AspectRatio from '../AspectRatio'
import Text from '../Text'
import { Movie } from '../Icon'

const Wrapper = styled.div`
	background: none;
	border: none;
	margin: 0;
	flex: 1;
	display: flex;
	position: relative;
	background: ${p => p.error ? p.theme.colors.red : p.theme.colors.grey};
	border-radius: 0.1875rem;
	cursor: pointer;
`

const fill = `position: absolute; top: 0; bottom: 0; left: 0; right: 0;`

const Anchor = styled(Link)`
	appearance: none;
	width: 100%;
	color: currentColor;
	display: block;
	border-radius: 0.1875rem;
	z-index: 1;
	${fill}
	&:focus{${p => p.theme.focusShadow}}
`

const AbsoluteFill = styled.div`
	${fill}
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
`

const OverflowHidden = styled(AbsoluteFill)`
	overflow: hidden;
	border-radius: 0.1875rem;
`

const Image = styled.img`
	display: block;
	min-height: 100%;
	object-fit: cover;
	transition: 0.2s all;
	${p => p.loading && `filter: blur(2rem);`}
`

const Overlay = styled.div`
	width: 100%;
	margin-top: auto;
	display: flex;
	flex-direction: column-reverse;
	justify-content: space-between;
	background: ${p => p.theme.colors.overlay};
	box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	border-radius: 0 0 0.1875rem 0.1875rem;
	@media (hover: hover) {
		border-radius: 0.1875rem;
		height: 100%;
		background: none;
		box-shadow: none;
	}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{
		background: ${p => p.theme.colors.overlay};
		box-shadow: 0 0.25rem 2rem 0 rgba(5,10,13,0.30);
	}
`

const Info = styled.div`
	color: currentColor;
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	position: relative;
	padding: 0.75rem;
	cursor: pointer;
	overflow: hidden;
	@media (hover: hover) {opacity: 0;}
	${Wrapper}:hover &, ${Wrapper}:focus-within &{opacity: 1;}
`

const NoImage = styled.div`
	${fill}
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
	color: ${p => p.theme.colors.midGrey};
`

const Kind = styled.div`
	padding: 0.75rem 0.75rem 0;
	margin-bottom: -0.375rem;
	font-size: 0.75rem;
	font-weight: 500;
	text-transform: uppercase;
	letter-spacing: 0.025rem;
	color: ${p => p.theme.colors.lightGrey};
	@media (hover: hover) {
		margin-bottom: 0;
		color: transparent;
		padding: 0.75rem;
	}
	${Wrapper}:hover & {
		color: ${p => p.theme.colors.lightGrey};
	}
`

const Card = ({id, loading, error, loadMore, ...props}) => {
	console.log(props)
	const kind = props?.media_type
	const title = props?.title || props?.name
	const image = props?.poster_path || props?.profile_path
	const year = (props?.release_date || props?.first_air_date || props?.birthday)?.split('-')[0]

	return (
		<Wrapper error={error} {...props}>
			<AspectRatio ratio={0.75}/>
			{!(loading || error || loadMore) && <Anchor to={`/movies/${id}`} tabIndex={0}/>}
			<OverflowHidden>
				{image && (<Image src={`https://image.tmdb.org/t/p/w300/${image}`}/>)}
			</OverflowHidden>
			<AbsoluteFill>
				{!image && (
					<NoImage>
						<Movie/>
					</NoImage>
				)}
				{'!loadMore' && (
					<Overlay>
						{title && (
							<Info>
								<Text xs={0} sm={1} weight={500} style={{marginBottom: '0.25em'}}>{title}</Text>
								<Text>{year}</Text>
							</Info>
						)}
						<div style={{display: 'flex', alignItems: 'center'}}>
							{kind && <Kind style={{position: 'relative'}}>{kind}</Kind>}
						</div>
					</Overlay>
				)}
			</AbsoluteFill>
		</Wrapper>
	)
}

export default Card