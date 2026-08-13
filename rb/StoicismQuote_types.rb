# frozen_string_literal: true

# Typed models for the StoicismQuote SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# StoicQuote entity data model.
#
# @!attribute [rw] author
#   @return [String]
#
# @!attribute [rw] quote
#   @return [String]
StoicQuote = Struct.new(
  :author,
  :quote,
  keyword_init: true
)

# Request payload for StoicQuote#load.
#
# @!attribute [rw] author
#   @return [String, nil]
#
# @!attribute [rw] quote
#   @return [String, nil]
StoicQuoteLoadMatch = Struct.new(
  :author,
  :quote,
  keyword_init: true
)

