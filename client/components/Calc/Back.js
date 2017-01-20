import styled from 'styled-components'

const Back = styled.div`
  padding-top: 50px;
	background: url(${props => props.src}) no-repeat center;
	width: 100%;
	height: 100%;
	display: inline-block;
	margin-left: -2px;
`

export default Back
