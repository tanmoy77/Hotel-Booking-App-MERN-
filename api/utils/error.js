export const createError = (status, errMsg) => {
  const err = new Error();
  err.status = status;
  err.message = errMsg;
  return err;
};
