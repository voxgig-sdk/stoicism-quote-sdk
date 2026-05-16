# StoicismQuote SDK utility: make_context

from core.context import StoicismQuoteContext


def make_context_util(ctxmap, basectx):
    return StoicismQuoteContext(ctxmap, basectx)
