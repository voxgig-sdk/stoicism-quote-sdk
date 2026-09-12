import { Context } from './Context';
declare class StoicismQuoteError extends Error {
    isStoicismQuoteError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { StoicismQuoteError };
