

import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export function Index  () {
  const msg = useContext(UserContext);
    return (
        <div>
            <div>
              <h2>About</h2>
              {msg}
            </div>
        </div>
    )
}
