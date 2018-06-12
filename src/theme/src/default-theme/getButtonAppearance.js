import { Themer } from '../../../themer/'
import scales from './scales'
import {
  getTextColorForIntent,
  getPrimaryButtonStylesForIntent
} from './helpers'
import { defaultControlStyles } from './shared'

/**
 * Disabled styles are all the same for all buttons.
 */
const disabled = defaultControlStyles.disabled

/**
 * Get button appearance.
 * @param {String} appearance - default, primary, minimal.
 * @param {String} intent - none, success, warning, danger.
 * @return {Object} the appearance of the button.
 */
const getButtonAppearance = (appearance, intent) => {
  switch (appearance) {
    case 'primary': {
      const { linearGradient, focusColor } = getPrimaryButtonStylesForIntent(
        intent
      )
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: 'white',
          backgroundColor: 'white',
          backgroundImage: linearGradient.base,
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N5A
          }, inset 0 -1px 1px 0 ${scales.neutral.N2A}`
        },
        hover: {
          backgroundImage: linearGradient.hover
        },
        focus: {
          boxShadow: `0 0 0 3px ${focusColor}, inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 -1px 1px 0 ${scales.neutral.N5A}`
        },
        active: {
          backgroundImage: linearGradient.active,
          boxShadow: `inset 0 0 0 1px ${
            scales.neutral.N4A
          }, inset 0 1px 1px 0 ${scales.neutral.N2A}`
        }
      })
    }
    case 'minimal': {
      const intentTextColor = getTextColorForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          backgroundColor: 'transparent'
        },
        hover: {
          backgroundColor: scales.neutral.N2A
        },
        focus: {
          boxShadow: `0 0 0 3px ${scales.blue.B5A}`
        },
        active: {
          backgroundImage: 'none',
          backgroundColor: scales.blue.B3A
        }
      })
    }
    case 'default':
    default: {
      const intentTextColor = getTextColorForIntent(intent)
      return Themer.createButtonAppearance({
        disabled,
        base: {
          color: intentTextColor,
          ...defaultControlStyles.base
        },
        hover: defaultControlStyles.hover,
        focus: defaultControlStyles.focus,
        active: defaultControlStyles.active
      })
    }
  }
}

export default getButtonAppearance
