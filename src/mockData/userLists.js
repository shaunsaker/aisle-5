const userLists = {
  1: {
    uid: '1',
    date_added: Date.now(),
    unique_id: '1',
    list: [
      {
        user_item_id: '1',
        date_added: Date.now(),
        date_purchased: Date.now(),
        quantity: 2,
      },
      {
        user_item_id: '2',
        date_added: Date.now(),
        date_purchased: Date.now(),
        quantity: 1,
      },
      {
        user_item_id: '3',
        date_added: Date.now(),
        date_purchased: Date.now(),
        quantity: 1,
      },
      {
        user_item_id: '4',
        date_added: Date.now(),
        date_purchased: Date.now(),
        quantity: 1,
      },
    ],
    id: '1',
  },
  2: {
    uid: '1',
    date_added: Date.now() - 100000000,
    unique_id: '1',
    list: [
      {
        user_item_id: '2',
        date_added: Date.now() + 100000,
        date_purchased: Date.now() + 100000,
        quantity: 1,
      },
      {
        user_item_id: '3',
        date_added: Date.now() + 100000,
        date_purchased: Date.now() + 100000,
        quantity: 1,
      },
    ],
    id: '2',
  },
};

export default userLists;
