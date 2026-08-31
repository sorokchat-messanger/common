export const Mode = {
  DEVELOPMENT: "development",
  PRODUCTION: "production",
} as const;

export type Mode = (typeof Mode)[keyof typeof Mode];
