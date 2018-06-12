import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Box, { dimensions, spacing, position, layout } from 'ui-box'
import { Text } from '../../typography'
import { Icon } from '../../icon'
import { withTheme } from '../../theme'

class Select extends PureComponent {
  static propTypes = {
    /**
     * Composes the dimensions spec from the Box primitivie.
     */
    ...dimensions.propTypes,

    /**
     * Composes the spacing spec from the Box primitivie.
     */
    ...spacing.propTypes,

    /**
     * Composes the position spec from the Box primitivie.
     */
    ...position.propTypes,

    /**
     * Composes the layout spec from the Box primitivie.
     */
    ...layout.propTypes,

    /**
     * The id attribute for the select.
     */
    id: PropTypes.string,

    /**
     * The name attribute for the select.
     */
    name: PropTypes.string,

    /**
     * The options that are passed to the select.
     */
    children: PropTypes.node,

    /**
     * Function called when value changes.
     */
    onChange: PropTypes.func,

    /**
     * The value of the select.
     */
    value: PropTypes.any,

    /**
     * When true, the select is required.
     */
    required: PropTypes.bool,

    /**
     * When true, the select should auto focus.
     */
    autofocus: PropTypes.bool,

    /**
     * When true, the select is invalid.
     */
    isInvalid: PropTypes.bool,

    /**
     * The appearance of the select. The default theme only supports default.
     */
    appearance: PropTypes.string.required,

    /**
     * Theme provided by ThemeProvider.
     */
    theme: PropTypes.object.isRequired
  }

  static defaultProps = {
    appearance: 'default',
    height: 32
  }

  render() {
    const {
      theme,

      id,
      name,
      height,
      children,
      disabled,
      onChange,
      value,
      required,
      autofocus,
      isInvalid,
      appearance,
      ...props
    } = this.props

    const themedClassName = theme.getSelectClassName(appearance)
    const textSize = theme.getTextSizeForControlHeight(height)
    const borderRadius = theme.getBorderRadiusForControlHeight(height)
    const iconSize = theme.getIconSizeForSelect(height)

    return (
      <Box
        display="inline-flex"
        flex={1}
        position="relative"
        width={200}
        height={height}
        {...props}
      >
        <Text
          is="select"
          className={themedClassName}
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          required={required}
          autofocus={autofocus}
          disabled={disabled}
          aria-invalid={isInvalid}
          size={textSize}
          borderRadius={borderRadius}
          textTransform="default"
          paddingLeft={Math.round(height / 3.2)}
        >
          {children}
        </Text>
        <Icon
          icon="caret-down"
          color="default"
          size={iconSize}
          boxSizing="border-box"
          position="absolute"
          top="50%"
          marginTop={-iconSize / 2}
          right={height >= 36 ? 12 : 8}
          css={{ pointerEvents: 'none' }}
        />
      </Box>
    )
  }
}

export default withTheme(Select)
