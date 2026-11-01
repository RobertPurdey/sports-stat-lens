export const gameQuerySchema = {
  type: 'object',
  properties: {
    week: { type: 'integer', minimum: 1, maximum: 18 }
  },
  additionalProperties: false
} as const;