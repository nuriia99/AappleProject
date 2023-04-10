interface Category {
  _id: string,
  _createdAt: string,
  _updatedAt: string,
  _rev: string,
  _type: 'category',
  slug: {
    _type: 'slug',
    current: string
  },
  title: string
}

interface Product {
  _id: string,
  _createdAt: string,
  _updatedAt: string,
  _rev: string,
  _type: 'product',
  slug: {
    _type: 'slug',
    current: string
  },
  title: string,
  price: number,
  image: [{
    _key: string,
    _type: 'image',
    asset: {
      url: string;
    }
  }],
  category: {
    _type: "reference";
    _ref: string;
  }
}