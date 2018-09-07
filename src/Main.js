import React from 'react'
import { connect } from 'react-redux'

const Main = props => {
  const { requestInProgress, characterList } = props
  return (
    <>
      <h1>Request in progress: {requestInProgress ? 'true' : 'false'}</h1>
      <table>
        {characterList.map(c => {
          return (
            <tr key={c.id}>
              <td>{c.actor}</td>
              <td>{c.role}</td>
            </tr>
          )
        })}
      </table>
    </>
  )
}

const mapStateToProps = state => {
  return {
    requestInProgress: state.requestInProgress,
    characterList: state.characterList,
  }
}

export default connect(mapStateToProps)(Main)
