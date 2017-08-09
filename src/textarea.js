import React, { Component } from 'react'
import { Field } from 'react-redux-form/immutable'

import errBlock from './err-block'

class BisuReactTextarea extends Component {
  componentDidMount() {
    if (this.props.autoFocus) {
      setTimeout(() => {
        this._input.select()
      }, 10)
    }
  }

  _onFocus = e => {
    //console.log('focus', this.props.onFocus)
    // attempt to add class .isfocused to the field tforms--field
    const field = e.target.closest('.tforms--field')
    if (!field) {
      this.props.onFocus && this.props.onFocus()
      return
    }
    field.classList.add('isfocused')
    this.props.onFocus && this.props.onFocus()
  }

  _onBlur = e => {
    // removed .isfocused to the field
    const field = e.target.closest('.tforms--field')
    if (!field) {
      this.props.onFocus && this.props.onBlur()
      return
    }
    field.classList.remove('isfocused')
    this.props.onFocus && this.props.onBlur()
  }

  render() {
    const { model, label, required, onFocus, onBlur, ...props } = this.props
    return (
      <Field model={model} className="bisu--react-input">
        <label htmlFor={model}>
          {label} {required && <span className="req">*</span>}
        </label>
        <textarea
          className="form-control"
          ref={c => (this._input = c)}
          id={model}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          {...props}
        />
        {errBlock(model)}
      </Field>
    )
  }
}

export default BisuReactTextarea
