import PropTypes from 'prop-types';
import defaultImg from './../img/logo512.png';

export default function Card({
  url = defaultImg,
  title,
  authorUrl,
  authorTag = 'author undefined',
  price,
  quantity,
}) {
  return (
    <div>
      <img src={url} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{authorTag}</a>
      </p>
      <p>Price: {price}</p>
      <p>Ability: {quantity > 0 ? 'yes' : 'no'}</p>
      <button type="button">Add to cart</button>
    </div>
  );
}

Card.propTypes = {
  authorTag: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
