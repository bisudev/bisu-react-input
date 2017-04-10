import React, { Component } from 'react'
import { Provider } from 'react-redux'
import {render} from 'react-dom'
import { Form } from 'react-redux-form/immutable'
import { Fieldset, Row, Field } from 'react-gridforms'
import Modal from 'bisu-react-modal'

import configureStore from './configure-store'
const store = configureStore()

import ThisComponent from '../../src'
import './demo.scss'

const required = (val) => val && val.length

const validators = {
  username: { required },
  password: { required },
}

class Demo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  _showModal = () => {
    this.setState({
      showModal: true,
    })
  }

  _hideModal = () => {
    this.setState({
      showModal: false,
    })
  }

  _onSubmit = (formData) => {
    console.log('formData', formData.toJS())
  }

  _renderForm() {
    const lp = <span className="text-success">Password with <a href="http://google.com">Link</a></span>

    return (
      <Form model="formState" onSubmit={this._onSubmit} validators={validators} className="grid-form">
        <Fieldset legend="Form 1">
          <Row>
            <Field>
              <ThisComponent
                model=".username"
                label="Username"
                placeholder="Username"
                autoFocus
                required
              />
            </Field>
          </Row>
          <Row>
            <Field>
              <ThisComponent
                type="password"
                model=".password"
                label={lp}
              />
            </Field>
          </Row>
        </Fieldset>
        <hr />
        <button type="submit" className="btn btn-primary">Submit</button>
      </Form>
    )
  }

  render() {
    const { showModal } = this.state

    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          <h1>bisu-row-search Demo</h1>
          {this._renderForm()}
          <Modal isOpen={showModal} handleClose={this._hideModal}>
            {this._renderForm()}
          </Modal>
        </div>
        <button type="button" onClick={this._showModal} className="btn btn-info">Open this form in modal</button>
      </div>
    )
  }
}

const Main = () => (
  <Provider store={store}>
    <Demo />
  </Provider>
)

render(<Main/>, document.querySelector('#demo'))
