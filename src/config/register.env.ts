import { registerAs } from "@nestjs/config";
import { validateEnv } from "./validate.env.js";
import type { ClassConstructor } from "class-transformer";

export function registerEnv<TInput extends object, TOutput extends object>(
  path: string,
  validator: ClassConstructor<TInput>,
  data: unknown,
  mapper?: (input: TInput) => TOutput,
) {
  return registerAs<TOutput>(path, () => {
    const parsed: TInput = validateEnv(data, validator);

    if (mapper) {
      return mapper(parsed);
    }

    const prefix: string = path.toUpperCase();
    const result: Record<string, unknown> = {};

    for (const key of Object.keys(parsed)) {
      const resultKey = String(key)
        .replace(new RegExp(`^${prefix}_?`), "")
        .toLowerCase() as keyof TOutput;

      result[resultKey as string] = parsed[key as keyof TInput];
    }

    return result as TOutput;
  });
}
