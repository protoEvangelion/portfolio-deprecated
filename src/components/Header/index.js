import React from 'react'
import styled from 'styled-components'

const Item = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	position: relative;
	cursor: default;
	box-shadow: 
		inset 0 0 0 0 rgba(200,95,66, 0.4),
		inset 0 0 0 16px rgba(255,255,255,0.6),
		0 1px 2px rgba(0,0,0,0.1);
	transition: all 0.4s ease-in-out;

	&:hover {
		opacity: 1;
		transform: scale(1);
		box-shadow: 
		inset 0 0 0 110px rgba(200,95,66, 0.4),
		inset 0 0 0 16px rgba(255,255,255,0.8),
		0 1px 2px rgba(0,0,0,0.1);
	}
`
const Info = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	border-radius: 50%;
	opacity: 0;
	transition: all 0.4s ease-in-out;
	transform: scale(0);
	-webkit-backface-visibility: hidden;
`
const Title = styled.h3`
	color: #fff;
	text-transform: uppercase;
	position: relative;
	letter-spacing: 2px;
	font-size: 22px;
	margin: 0 30px;
	padding: 65px 0 0 0;
	height: 110px;
	font-family: 'Open Sans', Arial, sans-serif;
	text-shadow: 
		0 0 1px #fff, 
		0 1px 2px rgba(0,0,0,0.3);
`
const Description = styled.p`
	color: #fff;
	padding: 10px 5px;
	font-style: italic;
	margin: 0 30px;
	font-size: 12px;
	border-top: 1px solid rgba(255,255,255,0.5);
`
const Header = () => (
	<div>
		<section>
				<ul>
					<li>
						<Item>
							<Info>
								<Title>Brainiac</Title>
								<Description>by Daniel Nyari</Description>
							</Info>
						</Item>
					</li>
				</ul>
			</section>
	</div>
)

export default Header

		// <div id="wikiPic"></div>
		// <div id="quotePic"></div>
		// <div id="weatherPic"></div>