export const brand = {
  primary: "#FF9670",
  surface: "#FFEFEA",
  background: "#090200",
  films: "#455FE5",
  design: "#F25672",
  social: "#FFB957",
  health: "#01775A",
} as const;

/** The five Harty dots, left to right. */
export const DOTS = [brand.films, brand.design, brand.primary, brand.social, brand.health];

const CATEGORY: Record<string, string> = {
  Social: brand.films,
  Entertainment: brand.design,
  Music: brand.health,
  Education: brand.social,
  Productivity: brand.primary,
  Developer: brand.films,
  Commerce: brand.social,
  Travel: brand.design,
};
export const categoryColor = (c: string) => CATEGORY[c] ?? brand.primary;
