import React from 'react'
import ReactLoading from 'react-loading'

import '../css/Loading.css'

function Loading () {
  return (
    <div id="loading">
      <ReactLoading
        width="120px"
        className="loading"
        type="cubes"
        color="#252525"
      />
    </div>
  )
}

export default Loading
