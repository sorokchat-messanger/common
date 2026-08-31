import { type ValidationError } from "@nestjs/common";
import { type ClassConstructor, plainToClass } from "class-transformer";
import { validateSync } from "class-validator";

export function validateEnv<T extends object>(
  data: unknown,
  plain: ClassConstructor<T>,
): T {
  const validated = plainToClass(plain, data, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(validated, {
    whitelist: true,
    skipMissingProperties: false,
  });
  if (errors.length) {
    const message = `ENV Failed\n ${formatErrors(errors).join("\n")}`;
    console.log(message);
    throw new Error(message);
  }

  return validated;
}

function formatErrors(validationErrors: ValidationError[]): string[] {
  return validationErrors.flatMap((error) => {
    const messages = error.constraints ? Object.values(error.constraints) : [];
    const childrenMessages = error.children ? formatErrors(error.children) : [];
    return [...messages, ...childrenMessages];
  });
}
