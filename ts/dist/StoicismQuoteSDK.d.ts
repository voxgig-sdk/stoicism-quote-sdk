import { StoicQuoteEntity } from './entity/StoicQuoteEntity';
export type * from './StoicismQuoteTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { StoicismQuoteEntityBase } from './StoicismQuoteEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class StoicismQuoteSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    StoicQuote(entopts?: Record<string, any>): StoicQuoteEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): StoicismQuoteSDK;
    tester(testopts?: any, sdkopts?: any): StoicismQuoteSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof StoicismQuoteSDK;
export { stdutil, config, BaseFeature, StoicismQuoteEntityBase, StoicismQuoteSDK, SDK, };
