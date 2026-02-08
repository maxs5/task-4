import PropTypes from 'prop-types';
import FieldLayout from './FieldLayout.jsx';

const Field = ({ field, onCellClick, isGameLocked }) => {
  return <FieldLayout field={field} onCellClick={onCellClick} isGameLocked={isGameLocked} />;
};

Field.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  isGameLocked: PropTypes.bool.isRequired,
};

export default Field;
