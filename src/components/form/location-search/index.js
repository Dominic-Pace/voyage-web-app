import React from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

import { Control } from 'react-redux-form'
import { Row } from 'react-bootstrap'
import {scrubValidatorForValidators} from '../../../utils/scrub'

import '../styles.css'

const WrappedLocationSearchInput = ({
  defaultValue,
  handleChange,
  handleSelect,
  model,
  placeholder,
  style,
  validation,
  value,
  width,
}) => (
  <Row className="text-form-container">
    <Control
      className="text-form-field"
      component={LocationSearchInput}
      defaultValue={defaultValue}
      handleChange={handleChange}
      handleSelect={handleSelect}
      mapProps={{
        value: value,
      }}
      model={`.${model}`}
      placeholder={placeholder}
      style={{
        ...{
          width: width || '30vw',
        }, ...style
      }}
      validators={scrubValidatorForValidators(validation)}
    />
  </Row>
)


class LocationSearchInput extends React.Component {
  render() {
    const {
      className,
      handleChange,
      handleSelect,
      placeholder,
      style,
      value,
    } = this.props

    return (
      <PlacesAutocomplete
        value={value}
        onChange={val => { handleChange(val) }}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <React.Fragment>
            <input {...getInputProps({
                placeholder: placeholder || 'Search For Your Home Address...',
                className: className || 'location-search-input',
              })}
              style={style}
            />
            <div className={ suggestions.length > 0 ? 'location-search-dropdown-container' : null}>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'location-search-suggestion-item-active'
                  : 'location-search-suggestion-item'
                return (
                  <div {...getSuggestionItemProps(suggestion, { className })}>
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </React.Fragment>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default WrappedLocationSearchInput
