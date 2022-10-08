import Card from './Card';
import PropTypes from 'prop-types';

export default function CardList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Card
            url={item.url}
            title={item.title}
            authorUrl={item.author.url}
            authorTag={item.author.tag}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
}

CardList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
