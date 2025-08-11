/* eslint-disable @typescript-eslint/no-explicit-any */
export type IMeta = {
  page: number;
  limit: number;
  total: number;
};
export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
};
