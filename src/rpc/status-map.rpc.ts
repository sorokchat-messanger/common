import { RpcStatuses } from "./statuses.rpc.js";
import { HttpStatus } from "@nestjs/common";

export const STATUS_MAP: Record<RpcStatuses, number> = {
  [RpcStatuses.OK]: HttpStatus.OK,
  [RpcStatuses.CANCELLED]: 499,
  [RpcStatuses.UNKNOWN]: HttpStatus.INTERNAL_SERVER_ERROR,
  [RpcStatuses.INVALID_ARGUMENT]: HttpStatus.BAD_REQUEST,
  [RpcStatuses.DEADLINE_EXCEEDED]: HttpStatus.GATEWAY_TIMEOUT,
  [RpcStatuses.NOT_FOUND]: HttpStatus.NOT_FOUND,
  [RpcStatuses.ALREADY_EXISTS]: HttpStatus.CONFLICT,
  [RpcStatuses.PERMISSION_DENIED]: HttpStatus.FORBIDDEN,
  [RpcStatuses.RESOURCE_EXHAUSTED]: HttpStatus.TOO_MANY_REQUESTS,
  [RpcStatuses.FAILED_PRECONDITION]: HttpStatus.PRECONDITION_FAILED,
  [RpcStatuses.ABORTED]: HttpStatus.CONFLICT,
  [RpcStatuses.OUT_OF_RANGE]: HttpStatus.BAD_REQUEST,
  [RpcStatuses.UNIMPLEMENTED]: HttpStatus.NOT_IMPLEMENTED,
  [RpcStatuses.INTERNAL]: HttpStatus.INTERNAL_SERVER_ERROR,
  [RpcStatuses.UNAVAILABLE]: HttpStatus.SERVICE_UNAVAILABLE,
  [RpcStatuses.DATA_LOSS]: HttpStatus.INTERNAL_SERVER_ERROR,
  [RpcStatuses.UNAUTHENTICATED]: HttpStatus.UNAUTHORIZED,
};
