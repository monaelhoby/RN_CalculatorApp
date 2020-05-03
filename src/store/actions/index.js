
export const BUTTON_PRESSED = 'BUTTON_PRESSED'
export const OPERATOR = 'OPERATOR'

export const buttonPressed = value => {
  return {
    type: BUTTON_PRESSED,
    value
  }
}

export const operate = value => {
  return {
    type: OPERATOR,
    value
  }
}
