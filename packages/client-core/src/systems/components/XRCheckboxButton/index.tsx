import React from 'react'

import { Check } from '@mui/icons-material'

import styleString from './index.scss'

type labelPositionVariant = 'start' | 'end' | 'none'

const XRCheckboxButton = (props) => {
  const {
    labelPosition = 'end',
    labelContent,
    checked,
    ...inputProps
  }: { labelPosition: labelPositionVariant; labelContent: any; checked: boolean; inputProps: any } = props

  return (
    <>
      <style>{styleString}</style>
      {labelPosition === 'start' && <span className="label">{labelContent}</span>}
      <label className="checkbox">
        <input type="checkbox" checked={checked} {...inputProps} />
        {checked && (
          <span className="checkboxIcon">
            <Check />
          </span>
        )}
      </label>
      {labelPosition === 'end' && <span className="label">{labelContent}</span>}
    </>
  )
}

export default XRCheckboxButton
