import { StatusCodes } from "http-status-codes";

interface HttpError {
  statusCode: number;
  message: string;
}

abstract class HttpError extends Error implements HttpError {
  public statusCode: number;
  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
  }
}

export class UnauthorizedError extends HttpError {
  constructor(message: string) {
    super(message, StatusCodes.UNAUTHORIZED);
  }
}

export class NotFoundError extends HttpError {
  constructor(message: string) {
    super(message, StatusCodes.NOT_FOUND);
  }
}

export class BadRequest extends HttpError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}

export class BadGatewayError extends HttpError {
  constructor(message: string) {
    super(message, StatusCodes.BAD_GATEWAY);
  }
}
