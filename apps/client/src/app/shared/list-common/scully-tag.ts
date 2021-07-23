/**
 * Type to apply for scully tags, from ScullyRoute items
 */
export type ScullyTag = string & { readonly brand: unique symbol };

export const ScullyTag = (scullyTag: string): ScullyTag =>
  scullyTag as ScullyTag;
