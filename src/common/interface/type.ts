import * as Koa from 'koa';

export type TNext = Koa.Next;

export type TKoa = Koa<Koa.DefaultState, Koa.DefaultContext>;

export type TCtx = Koa.ParameterizedContext<Koa.DefaultState, Koa.DefaultContext>;
