import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return <section className={css.statistics}>
        {title && <h2 className={css.title}>Upload stats</h2>}

        <ul className={css["stat-list"]}>
            
        {stats.map(obj => <li key={obj.id} className={css.item} style={{ backgroundColor: getRandomHexColor(), flexBasis: getItemWidth(stats.length) }}>
            <span className={css.label}>{obj.label}</span>
            <span className={css.percentage}>{obj.percentage}%</span>
            </li>)}
        </ul>
    </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getItemWidth(numberOfItems) {
  return `${320/numberOfItems}px`;
}