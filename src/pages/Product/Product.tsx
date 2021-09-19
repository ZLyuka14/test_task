/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { getProductDetails } from '../../store/modules/product/actions';

type TParams = { id: string };

type ProductdType = {
  imageUrl: string;
  name: string;
  description: string;
  count: number;
  size: {
    width: number;
    height: number;
  };
  weight: string;
  comments: [];
  getProductDetails: (id: string) => Promise<void>;
};

type PropsType = RouteComponentProps<TParams> & ProductdType;
type StateType = {};

class Product extends React.Component<PropsType, StateType> {
  async componentDidMount(): Promise<void> {
    const { match } = this.props;
    await this.props.getProductDetails(match.params.id);
  }

  render(): JSX.Element {
    const { imageUrl } = this.props;
    const { description } = this.props;
    const { name } = this.props;
    const { count } = this.props;
    const { size } = this.props;
    const { weight } = this.props;
    const { comments } = this.props;

    return (
      <div className="product">
        <div className="product__body">
          <div className="product__img">
            <img src={imageUrl} alt={name} />
          </div>
          <div className="product__description">{description}</div>
          <div className="product__properties">
            <div className="properties__count">Amount of this product on a warehouse: {count}</div>
            <div className="properties__size">
              Sizes: w-{size.width}/h-{size.height}
            </div>
            <div className="properties__weight">Weight: {weight}</div>
          </div>
        </div>
        <div className="product__comments">{comments}</div>
      </div>
    );
  }
}

function mapStateToProps(state?: any): StateType {
  const { imageUrl } = state;
  const { description } = state;
  const { name } = state;
  const { count } = state;
  const { size } = state;
  const { weight } = state;
  const { comments } = state;

  return {
    imageUrl: imageUrl.valueOf(),
    description,
    name,
    count,
    size: { width: size.width, height: size.height },
    weight,
    comments,
  };
}

export default withRouter(connect(mapStateToProps, { getProductDetails })(Product));
