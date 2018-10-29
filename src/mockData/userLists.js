const userLists = [
  {
    uid: '1',
    date_added: Date.now(),
    unique_id: '1',
    list: [
      {
        user_item_id: '1',
        date_added: Date.now(),
        date_purchased: Date.now(),
        quantity: 6,
      },
    ],
  },
  {
    uid: '1',
    date_added: Date.now(),
    unique_id: '1',
    list: [
      {
        user_item_id: '1',
        date_added: Date.now() + 100000,
        date_purchased: Date.now() + 100000,
        quantity: 6,
      },
    ],
  },
];

export default userLists;
