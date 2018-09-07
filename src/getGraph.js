const getGraph = query => {
  return async dispatch => {
    dispatch({
      type: 'request_starting',
    })
    const url = 'http://localhost:8080/'
    const result = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({ query }),
    })
    const response = await result.json()
    dispatch({
      type: 'request_finished',
      response: response.data.characters,
    })
  }
}

export default getGraph
