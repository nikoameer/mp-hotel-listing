import { useState } from 'react'

// Channel component but currently not used
function Channel ({ name, visibility }) {
  return (
    <div>
      <p><b>Channel:</b> <i>{name} {visibility}</i></p>
    </div>
  )
}

export default Channel
