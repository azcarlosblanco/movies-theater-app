import React from 'react'
import styled from 'styled-components'
import Container from '../Container'
import Link from '../Link'
import { Github } from '../Icon'

const Wrapper = styled.div`
	padding: 1.5rem 0;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`

const Anchor = styled(Link)`
	display: block;
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 0.125rem;
	font-weight: 500;
	color: ${p => p.theme.colors.grey};
	&:hover, &:focus {color: ${p => p.theme.colors.lightGrey}}
	&:focus{${p => p.theme.focusShadow}}
	& strong{
		font-weight: 500;
	}
`


const Footer = () => (
	<Container>
		<Wrapper>
			<Anchor to='https://github.com/azcarlosblanco/movies-theater-app'><Github/></Anchor>
		</Wrapper>
	</Container>
)

export default Footer
