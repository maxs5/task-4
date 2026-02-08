import PropTypes from 'prop-types';
import styles from './Information.module.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  let message = `Ходит: ${currentPlayer}`;

  if (isDraw) {
    message = 'Ничья';
  } else if (isGameEnded) {
    message = `Победа: ${currentPlayer}`;
  }

  return <p className={styles.info}>{message}</p>;
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
};

export default InformationLayout;
