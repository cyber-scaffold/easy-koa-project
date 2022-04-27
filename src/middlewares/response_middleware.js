import {isNil} from "lodash";

/**
 * 响应数据格式化中间件
 * 根据业务中间件return的值来进行统一的格式处理
 * **/
export default async function response_middleware(context,next){
  try {
    const returnValue = await next();
    /** 返回值为Buffer二进制 **/
    if (returnValue instanceof Buffer) {
      context.response.status = 200;
      context.response.body = returnValue;
      return false;
    }
    /**
     * 返回值中包含 null void 0 NaN 等价于false的值 
     * @see https://lodash.com/docs/#isNil
     * **/
    if (isNil(returnValue)) {
      context.response.status = 200;
      context.response.body = { code: 0, status: 'succees', message: 'ok', data: null };
      return false;
    }
    /** 返回值为正常的时候 **/
    context.response.status = 200;
    context.response.body = { code: 0, status: 'succees', message: 'ok', data: returnValue };
    return false;
  } catch (error) {
    context.response.body = { code: 10000, status: 'error', message: error.message, data: {} };
    return false;
  }
};