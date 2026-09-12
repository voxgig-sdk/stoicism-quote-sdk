import { StoicismQuoteEntityBase } from '../StoicismQuoteEntityBase';
import type { StoicismQuoteSDK } from '../StoicismQuoteSDK';
import type { Control } from '../types';
import type { StoicQuote, StoicQuoteLoadMatch } from '../StoicismQuoteTypes';
declare class StoicQuoteEntity extends StoicismQuoteEntityBase<StoicQuote> {
    constructor(client: StoicismQuoteSDK, entopts: any);
    make(this: StoicQuoteEntity): StoicQuoteEntity;
    load(this: any, reqmatch?: StoicQuoteLoadMatch, ctrl?: Control): Promise<StoicQuoteEntity>;
}
export { StoicQuoteEntity };
