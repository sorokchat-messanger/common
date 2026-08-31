import { IsEnum } from "class-validator";
import { Mode } from "../types/index.js";

export class BaseValidator {
  @IsEnum(Mode)
  NODE_ENV!: Mode;
}
