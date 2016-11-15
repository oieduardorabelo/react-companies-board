import React from 'react'
import { render } from 'react-dom'

require.ensure(['./src/components/Companies'], (require) => {
  const Companies = require('./src/components/Companies').default

  render(
    <Companies />,
    document.getElementById('Companies'),
  )
})
