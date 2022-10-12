import Head from 'next/head'
import React from 'react'
import A from './A'

const MainContainer = ({ children, keywords, title }) => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta keywords={'max, it, nextjs' + keywords} />
			</Head>

			<div className='navbar'>
				<A href={'/'} text='Main' />
				<A href={'/users'} text='Users' />
			</div>
			<div>
				{children}
			</div>
		</>

	)
}

export default MainContainer