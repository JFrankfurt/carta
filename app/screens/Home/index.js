import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button, SubTitle, Title } from '../../components/common'

const HomeRoot = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Home = () => (
  <HomeRoot>
    <Title>This is your workspace</Title>
    <SubTitle>
      This is some very informative text explaining the react test
    </SubTitle>
    <Button>dummy button</Button>
  </HomeRoot>
)

const mapStateToProps = () => ({})
const mapDispatchToProps = () => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
