import React from 'react';
import PropTypes from 'prop-types';
import { CustomButton } from './styles';
import colors from '~/styles/colors';

export default function Button({ color, icon, label, ...rest }) {
  return (
    <CustomButton color={color} {...rest}>
      {icon}
      {label}
    </CustomButton>
  );
}

CustomButton.defaultProps = {
  color: colors.primary,
  icon: null,
  label: '',
};

CustomButton.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.element,
  label: PropTypes.string,
};
