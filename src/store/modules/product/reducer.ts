const initialState = {
  id: 1,
  imageUrl: 'other',
  name: 'other',
  count: 10,
  size: {
    width: 2000,
    height: 2000,
  },
  weight: '2000g',
  comments: [{ id: 3, productId: 1, description: 'some text here', date: new Date() }],
};

type ProductType = {
  id: number;
  imageUrl: string;
  name: string;
  count: number;
  size: { width: number; height: number };
  weight: string;
  comments: [Comment, Comment];
};

type Comment = {
  id: number;
  productId: number;
  description: string;
  date: Date;
};

export default function reducer(state = initialState, action: { type: string; payload: ProductType }): ProductType {
  switch (action.type) {
    default: {
      return { ...state, ...action.payload };
    }
  }
}
