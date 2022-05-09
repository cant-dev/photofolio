import React from 'react'

export default ({ children }) => (
  <div class="background-pattern-wrapper" style={{ margin: '0 auto' }}>
    <div class="pattern-film"></div>
    <div>{children}</div>
    <div class="pattern-film"></div>
  </div>
)
