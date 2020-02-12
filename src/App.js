import React, { Fragment, lazy, Suspense } from 'react'
import { Router } from '@reach/router'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Loader from './components/Loader'

const SearchView = lazy(() => import('./components/SearchView'))
const DetailView = lazy(() => import('./components/DetailView'))

const App = () => (
	<Fragment>
		<Navbar/>
		<div style={{flex: 1}}>
			<Suspense fallback={<Loader/>}>
				<Router>
					<SearchView path='/'/>
					<DetailView path='movies/:id'/>
				</Router>
			</Suspense>
		</div>
		<Footer/>
	</Fragment>
)

export default App
