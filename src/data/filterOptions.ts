export const filterOptions = {
  isSale: '세일상품',
  isExclusive: '단독상품',
  isSoldOut: '품절포함',
} as const;

export type FilterValueType = keyof typeof filterOptions;

export type FilterTitleType = typeof filterOptions[FilterValueType];
