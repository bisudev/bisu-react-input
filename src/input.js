import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field } from 'react-redux-form/immutable'

import errBlock from './err-block'

const isFn = prop => typeof prop === 'function'

class BisuReactInput extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      setTimeout(() => {
        this._input.select()
      }, 10)
    }
  }

  _onFocus = e => {
    // attempt to add class .isfocused to the field tforms--field
    const field = e.target.closest('.tforms--field')
    if (field) {
      field.classList.add('isfocused')
    }
    isFn(this.props.onFocus) && this.props.onFocus()
  }

  _onBlur = e => {
    // removed .isfocused to the field
    const field = e.target.closest('.tforms--field')
    if (field) {
      field.classList.remove('isfocused')
    }
    isFn(this.props.onBlur) && this.props.onBlur()
  }

  render() {
    const { model, type, label, required, ...props } = this.props
    return (
      <Field model={model} className="bisu--react-input">
        <label htmlFor={model}>
          {label} {required && <span className="req">*</span>}
        </label>
        <input
          id={model}
          type={type}
          className="form-control"
          ref={c => (this._input = c)}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          {...props}
        />
        {errBlock(model)}
      </Field>
    )
  }
}

BisuReactInput.propTypes = {
  model: PropTypes.string.isRequired,
  type: PropTypes.string,
  label: PropTypes.any,
  required: PropTypes.bool,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
}

BisuReactInput.defaultProps = {
  type: 'text',
}

export default BisuReactInput
