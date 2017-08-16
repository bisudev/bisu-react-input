import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { Form } from 'react-redux-form/immutable'
import { Fieldset, Row, Field } from 'tforms'
// import Modal from 'bisu-react-modal'

import { Input, Textarea } from '../../src'
import './demo.scss'
import configureStore from './configure-store'
const store = configureStore()

const required = val => val && val.length

const validators = {
  username: { required },
  password: { required },
}

class Demo extends Component {
  _onSubmit = formData => {
    console.log('formData', formData.toJS())
  }

  _onFocus = () => {
    console.log('demo focus')
  }

  _onBlur = () => {
    console.log('demo blur')
  }

  _renderForm() {
    const lp = (
      <span className="text-success">
        Password with <a href="http://google.com">Link</a>
      </span>
    )

    return (
      <Form
        model="formState"
        onSubmit={this._onSubmit}
        validators={validators}
        className="tforms"
      >
        <Fieldset legend="Form 1">
          <Row>
            <Field>
              <Input
                model=".username"
                label="Username"
                placeholder="Username"
                autoFocus
                required
                onFocus={this._onFocus}
                onBlur={this._onBlur}
              />
            </Field>
          </Row>
          <Row>
            <Field>
              <Input type="password" model=".password" label={lp} />
            </Field>
          </Row>
          <Row>
            <Field data-disabled="true">
              <Input model=".username" label="Disabled Username" disabled />
            </Field>
          </Row>
          <Row>
            <Field>
              <Input model=".email" label="Email" required />
            </Field>
            <Field>
              <Input model=".email" label="Email" required />
            </Field>
          </Row>
          <Row>
            <Field>
              <Textarea model=".address" label="Address" />
            </Field>
          </Row>
          <Row>
            <Field>
              <Input model=".email" label="Email" required />
            </Field>
            <Field>
              <Input type="checkbox" label="Is Active" model=".is_active" />
            </Field>
          </Row>
          <Row>
            <Field>
              <Input type="checkbox" label="Is Active" model=".is_active" />
            </Field>
          </Row>
        </Fieldset>
        <hr />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    )
  }

  render() {
    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-sm-4">
            <h1>bisu-react-input Demo</h1>
            <hr />
            {this._renderForm()}
          </div>
        </div>
      </div>
    )
  }
}

const Main = () =>
  <Provider store={store}>
    <Demo />
  </Provider>

render(<Main />, document.querySelector('#demo'))
