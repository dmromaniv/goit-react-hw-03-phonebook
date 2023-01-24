import PropTypes from 'prop-types';

import s from './Section.module.css';

export const Section = ({ children }) => {
  return <section className={s.section}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
