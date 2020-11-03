import * as log4js from 'log4js';
import { TCtx, TNext } from '@/common/interface/type';

export default () => async (ctx: TCtx, next: TNext) => {
  const start = Date.now();
  /** 这里会生成cheese.log文件 */
  log4js.configure({
    appenders: { cheese: { type: 'file', filename: 'cheese.log' } },
    categories: { default: { appenders: ['cheese'], level: 'info' } },
  });
  const logger = log4js.getLogger('cheese');
  await next();
  const end = Date.now();
  const responseTime = end - start;
  logger.info(`响应时间为${responseTime / 1000}s`);
};
