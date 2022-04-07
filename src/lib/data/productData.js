export const models = [
  {
    id: 'model-id-0',
    name: 'iPhone X',
    key: 'iphone-x',
    level: 2,
    parentId: 'brand-id-0',
    variants: [
      { variantId: 'variant-id-0', id: 'product-variant-5' },
      { variantId: 'variant-id-1', id: 'product-variant-6' },
      { variantId: 'variant-id-2', id: 'product-variant-7' },
    ]
  },
  {
    id: 'model-id-1',
    name: 'iPhone 8',
    key: 'iphone-8',
    level: 2,
    parentId: 'brand-id-0',
    variants: [
      { variantId: 'variant-id-0', id: 'product-variant-8' },
      { variantId: 'variant-id-2', id: 'product-variant-9' },
    ]
  },
  {
    id: 'model-id-2',
    name: 'iPhone 7',
    key: 'iphone-7',
    level: 2,
    parentId: 'brand-id-0',
    variants: [
      { variantId: 'variant-id-0', id: 'product-variant-0' },
      { variantId: 'variant-id-1', id: 'product-variant-1' },
      { variantId: 'variant-id-2', id: 'product-variant-2' },
    ]
  },
  {
    id: 'model-id-3',
    name: 'Samsung Galaxy S10',
    key: 'samsung-galaxy-s10',
    level: 2,
    parentId: 'brand-id-1',
    variants: [
      { variantId: 'variant-id-0', id: 'product-variant-3' },
      { variantId: 'variant-id-1', id: 'product-variant-4' }, 
    ]
  }
]

export const brands = [
  {
    id: 'brand-id-0',
    name: 'Apple',
    key: 'apple',
    level: 1,
    parentId: 'category-id-0',
    children: models.filter(model => model.parentId === 'brand-id-0')
  },
  {
    id: 'brand-id-1',
    name: 'Samsung',
    key: 'samsung',
    level: 1,
    parentId: 'category-id-0',
    children: models.filter(model => model.parentId === 'brand-id-1')
  },
  {
    id: 'brand-id-2',
    name: 'LG',
    key: 'lg',
    level: 1,
    parentId: 'category-id-0',
    children: models.filter(model => model.parentId === 'brand-id-2')
  },
  {
    id: 'brand-id-3',
    name: 'Nokia',
    key: 'nokia',
    level: 1,
    parentId: 'category-id-0',
    children: models.filter(model => model.parentId === 'brand-id-3')
  }
]

export const categories = [
  {
    id: 'category-id-0',
    name: 'Phones',
    key: 'phones',
    level: 0,
    children: brands.filter(brand => brand.parentId === 'category-id-0'),
  },
  {
    id: 'category-id-1',
    name: 'Computers',
    key: 'computers',
    level: 0,
    children: brands.filter(brand => brand.parentId === 'category-id-1'),
  },
  {
    id: 'category-id-2',
    name: 'Watches',
    key: 'watches',
    level: 0,
    children: brands.filter(brand => brand.parentId === 'category-id-2'),
  },
  {
    id: 'category-id-3',
    name: 'TVs',
    key: 'tvs',
    level: 0,
    children: brands.filter(brand => brand.parentId === 'category-id-3'),
  },
]

export const variants = [
  {
    id: 'variant-id-0',
    name: '64GB',
    key: '64gb',
    level: 3,
  },
  {
    id: 'variant-id-1',
    name: '128GB',
    key: '128gb',
    level: 3,
  },
  {
    id: 'variant-id-2',
    name: '256GB',
    key: '256gb',
    level: 3,
  }
]

export const products = [
  {
    id: 'product-id-0',
    name: 'iPhone X',
    quantity: 1,
    variantId: 'product-variant-5',
    modelId: 'model-id-0',
    brandId: 'brand-id-0',
    categoryId: 'category-id-0',
  },
  {
    id: 'product-id-1',
    name: 'Very clean iPhone 8',
    quantity: 1,
    variantId: 'product-variant-8',
    modelId: 'model-id-1',
    brandId: 'brand-id-0',
    categoryId: 'category-id-0',
  },
  {
    id: 'product-id-2',
    name: 'Very clean iPhone 7',
    quantity: 1,
    variantId: 'product-variant-0',
    modelId: 'model-id-2',
    brandId: 'brand-id-0',
    categoryId: 'category-id-0',
  },
  {
    id: 'product-id-3',
    name: 'Very clean iPhone 7',
    quantity: 1,
    modelId: 'model-id-2',
    variantId: 'product-variant-1',
    brandId: 'brand-id-0',
    categoryId: 'category-id-0',
  },
  {
    id: 'product-id-4',
    name: 'Very clean Samsung Galaxy S10',
    quantity: 1,
    variantId: 'product-variant-3',
    modelId: 'model-id-3',
    brandId: 'brand-id-1',
    categoryId: 'category-id-0',
  }
]
