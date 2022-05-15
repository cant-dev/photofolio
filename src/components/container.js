import React from 'react'

export default ({ children }) => (
  <div class="background-pattern-wrapper" style={{ margin: '0 auto' }}>
    <div class="pattern-film">
      <div class="top-button-block">
        <div class="up-forward-mark"></div>
        <div class="top-text">TOP</div>
      </div>
    </div>
    <div class="between-pattern">{children}</div>
    <div class="pattern-film"></div>
  </div>
)
