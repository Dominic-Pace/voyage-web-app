import React from 'react'
import Select from 'react-select'

import './styles.css'

class Dropdown extends React.Component {
  render() {
    const {
      defaultValue,
      handleChange,
      options,
      placeholder,
      placement,
      style,
    } = this.props
    return (
      <Select
        defaultValue={defaultValue}
        isSearchable={false}
        menuPlacement={placement || 'top'}
        onChange={handleChange}
        options={options}
        placeholder={placeholder || ''}
        styles={style}
      />
    )
  }
}

export default Dropdown
