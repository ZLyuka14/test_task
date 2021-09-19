/* eslint-disable no-console */
const initialState = {
  products: [
    {
      id: 1,
      imageUrl: 'some url here',
      name: 'Product name',
      description: 'default description',
      count: 4,
      size: {
        width: 200,
        height: 200,
      },
      weight: '200g',
      comments: [],
    },
  ] as ProductType[],
};

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

export default function reducer(state = initialState, action: { type: string; payload: ProductType[] }): ProductsType {
  switch (action.type) {
    case 'UPDATE_PRODUCTS': {
      return { ...state, products: action.payload };
    }

    default: {
      return { ...state, ...action.payload };
    }
  }
}
