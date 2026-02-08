import PropTypes from 'prop-types';
import Field from '../Field/Field.jsx';
import Information from '../Information/Information.jsx';
import styles from './Game.module.css';

const GameLayout = ({ currentPlayer, isGameEnded, isDraw, field, onCellClick, onRestart }) => {
  return (
    <section className={styles.page}>
      <div className={styles.card}>
        <header className={styles.header}>
          <h1 className={styles.title}>Крестики-Нолики</h1>
          <Information
            currentPlayer={currentPlayer}
            isGameEnded={isGameEnded}
            isDraw={isDraw}
          />
        </header>
        <Field field={field} onCellClick={onCellClick} isGameLocked={isGameEnded || isDraw} />
        <button className={styles.restart} type="button" onClick={onRestart}>
          Начать заново
        </button>
      </div>
    </section>
  );
};

GameLayout.propTypes = {
  currentPlayer: PropTypes.oneOf(['X', '0']).isRequired,
  isGameEnded: PropTypes.bool.isRequired,
  isDraw: PropTypes.bool.isRequired,
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCellClick: PropTypes.func.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export default GameLayout;
