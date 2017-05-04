import React, { Component } from 'react'
import { string, bool, any } from 'prop-types'
import { Field } from 'react-redux-form/immutable'
import errBlock from 'bisu-react-form-error'

class BisuReactInput extends Component {

  componentDidMount() {
    if (this.props.autoFocus) {
      setTimeout(() => {
        this._input.select()
      }, 10)
    }
  }

  render() {
    const { model, type, label, required, ...props } = this.props
    return (
      <Field model={model} className="bisu--react-input">
        <label htmlFor={model}>{label} {required && <span className="req">*</span>}</label>
        <input
          type={type}
          className="form-control"
          ref={(c) => this._input = c}
          {...props}
        />
        {errBlock(model)}
      </Field>
    )
  }
}

BisuReactInput.propTypes = {
  model: string,
  type: string,
  label: any,
  required: bool,
}

BisuReactInput.defaultProps = {
  type: 'text',
}

export default BisuReactInput
