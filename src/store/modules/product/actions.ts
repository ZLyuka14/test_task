/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dispatch } from 'redux';
import api from '../../../api/request';
import config from '../../../common/constants/api';

export const getProductDetails =
  () =>
  async (dispatch: Dispatch): Promise<void> => {
    try {
      const data = await api.get(`/products/:id`);
      await dispatch({ type: 'GET_PRODUCT_BY_ID', payload: data });
    } catch (e) {
      // console.log(e);
      dispatch({ type: `ERROR` });
    }
  };
