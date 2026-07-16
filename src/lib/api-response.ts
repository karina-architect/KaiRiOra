export type ApiErrorCode =
  "BAD_REQUEST" | "UNAUTHORIZED" | "FORBIDDEN" | "NOT_FOUND" | "RATE_LIMITED" | "INTERNAL_ERROR";

export type ApiSuccess<T> = {
  ok: true;
  data: T;
};

export type ApiFailure = {
  ok: false;
  error: {
    code: ApiErrorCode;
    message: string;
    details?: unknown;
  };
};

export type ApiResponse<T> = ApiSuccess<T> | ApiFailure;

export function success<T>(data: T, status = 200): Response {
  return Response.json({ ok: true, data } satisfies ApiSuccess<T>, { status });
}

export function failure(
  code: ApiErrorCode,
  message: string,
  status: number,
  details?: unknown
): Response {
  return Response.json(
    {
      ok: false,
      error: { code, message, ...(details ? { details } : {}) },
    } satisfies ApiFailure,
    { status }
  );
}
