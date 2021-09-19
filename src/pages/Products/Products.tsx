/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/ban-types */
import React from 'react';
import { connect } from 'react-redux';
import ProductItem from './components/ProductItem/ProductItem';
import { getProducts } from '../../store/modules/products/actions';
import './products.css';

type PropsType = {
  products: [];
  getProducts: () => Promise<void>;
};

type StateType = {};

type ProductType = {
  id: number;
  imageUrl: string;
  name: string;
  description: string;
  count: number;
  size: { width: number; height: number };
  weight: string;
  comments: [];
};

class Products extends React.Component<PropsType, StateType> {
  async componentDidMount(): Promise<void> {
    await this.props.getProducts();
  }

  render(): JSX.Element {
    const { products } = this.props;
    return (
      <section className="products">
        <div className="products__row">
          {products.map((product: ProductType) => (
            <ProductItem
              key={product.id}
              id={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              description={product.description}
              count={product.count}
            />
          ))}{' '}
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state: PropsType): StateType => ({
  ...state.products,
});

export default connect(mapStateToProps, { getProducts })(Products);
