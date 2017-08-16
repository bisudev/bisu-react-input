import { combineReducers } from 'redux'
import { createForms } from 'react-redux-form/immutable'

import { formState } from './reducer1'

export default combineReducers({
  // react-redux-form
  ...createForms({
    formState,
  }),
})
