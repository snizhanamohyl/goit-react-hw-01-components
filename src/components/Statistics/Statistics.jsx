import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return <section className="statistics">
        {title && <h2 className="title">Upload stats</h2>}

        <ul className="stat-list">
            
        {stats.map(obj => <li key={obj.id} className="item">
            <span className="label">{obj.label}</span>
            <span className="percentage">{obj.percentage}</span>
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