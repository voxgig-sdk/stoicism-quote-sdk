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
# @!attribute [rw] data
#   @return [Hash]
StoicQuote = Struct.new(
  :data,
  keyword_init: true
)

# Request payload for StoicQuote#load.
#
# @!attribute [rw] data
#   @return [Hash, nil]
StoicQuoteLoadMatch = Struct.new(
  :data,
  keyword_init: true
)

