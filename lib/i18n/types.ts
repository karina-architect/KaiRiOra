/**
 * Recursively widens literal types (e.g. the specific string "Home") to their
 * base type (string). This lets us derive a Dictionary shape from the English
 * dictionary while allowing other locales to provide different values.
 */
export type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer U)[]
        ? Widen<U>[]
        : { -readonly [K in keyof T]: Widen<T[K]> }
