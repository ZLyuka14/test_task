import React from 'react';
import { Link } from 'react-router-dom';

type ProductType = {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  count: number;
};

export default function ProductItem(props: ProductType): JSX.Element {
  const { imageUrl } = props;
  const { name } = props;
  const { description } = props;
  const { count } = props;
  const { id } = props;

  return (
    <div className="products__column">
      <div className="products__item">
        <div className="item__img">
          <img src={imageUrl} alt={description} />
        </div>
        <div className="item__text">
          <div className="item__title">{name}</div>
          <div className="item__description">{description}</div>
          <div className="item__amount">{count}</div>
        </div>
        <Link to={`./product/${id}`}>Link to product page</Link>
      </div>
    </div>
  );
}
