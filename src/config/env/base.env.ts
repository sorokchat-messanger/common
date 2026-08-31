import { type BaseConfig } from "../types/index.js";
import { BaseValidator } from "../validators/index.js";
import { registerEnv } from "./register.env.js";

export function getBaseEnv(data: unknown) {
  return registerEnv<BaseValidator, BaseConfig>("base", BaseValidator, data);
}
