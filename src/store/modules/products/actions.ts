/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Dispatch } from 'redux';
import api from '../../../api/request';
import config from '../../../common/constants/api';

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

type ProductsType = {
  products: ProductType[];
};

export const getProducts =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data: ProductsType = await api.get('/products');
      console.log('Getting products list:');
      console.log(data);
      await dispatch({ type: 'UPDATE_PRODUCTS', payload: data });
    } catch (e) {
      console.log(e);
      dispatch({ type: 'ERROR_ACTION_TYPE' });
    }
  };
