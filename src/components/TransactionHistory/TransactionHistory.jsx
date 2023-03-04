import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return <table className={css["transaction-history"]}>
  <thead>
    <tr className={css.head}>
      <th className={css["head-item"]}>Type</th>
      <th className={css["head-item"]}>Amount</th>
      <th className={css["head-item"]}>Currency</th>
    </tr>
  </thead>

  <tbody className={css["table-body"]}>
    {items.map(({id,type,amount,currency}) => <tr className={css.row} key={id}>
        <td className={[css["row-item"], css.type].join(' ') }>{ type}</td>
      <td className={css["row-item"]}>{ amount}</td>
        <td className={css["row-item"]}>{currency }</td>
    </tr>)}
  </tbody>
</table>
}


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  })),
}