import PropTypes from 'prop-types';
import styles from './Field.module.css';

const FieldLayout = ({ field, onCellClick, isGameLocked }) => {
  return (
    <div className={styles.grid}>
      {field.map((cell, index) => {
        const isDisabled = isGameLocked || Boolean(cell);
        const cellClassName = cell === 'X' ? styles.cellX : cell === '0' ? styles.cell0 : '';

        return (
          <button
            key={index}
            type="button"
            className={`${styles.cell} ${cellClassName}`}
            onClick={() => onCellClick(index)}
            disabled={isDisabled}
            aria-label={`Клетка ${index + 1}`}
          >
            {cell || <span className={styles.placeholder}>•</span>}
          </button>
        );
      })}
    </div>
  );
};

FieldLayout.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  isGameLocked: PropTypes.bool.isRequired,
};

export default FieldLayout;
