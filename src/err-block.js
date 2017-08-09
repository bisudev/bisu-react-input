import React from 'react'
import { Errors } from 'react-redux-form/immutable'

const errBlock = model =>
  <Errors
    className="bisu--errblock"
    show="touched"
    model={model}
    messages={{
      required: '* Required.',
      intRequired: '* Required.',
      similar: '* Not match.',
      isEmail: '* Must be a valid email',
    }}
  />

export default errBlock
