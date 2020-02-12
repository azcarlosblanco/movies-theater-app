import React from 'react'
import styled from 'styled-components'
import Link from '../Link'
import Container from '../Container'

const StickyContainer = styled(Container)`
	top: 0;
	position: sticky;
	z-index: 2;
	background: ${p => p.theme.colors.dark};
	margin: 0.5rem auto;
`

const Wrapper = styled.div`
	padding: 0.75rem 0 0.75rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const Title = styled(Link)`
	text-decoration: none;
	color: currentColor;
	margin: -0.5rem;
	padding: 0.5rem;
	border-radius: 2rem;
	user-select: none;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	vertical-align: 100px;
	font-size: 1.75rem;
	height: 4rem;
	width: 12rem;
`

const Navbar = () => (
	<StickyContainer>
		<Wrapper>
			<Title to='/'>
				Movies App
			</Title>
		</Wrapper>
	</StickyContainer>
)

export default Navbar
