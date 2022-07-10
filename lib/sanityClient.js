import sanityClient from '@sanity/client'

export const client = sanityClient({
    projectId: 'qej3w7mt',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token:
      'skrcCT2IWFdkazxaKrcBD4VV5j5fNxXBBnEPESevbJAMNeJXHmng1iQLiALCu0RUVbnm6BT4o5elk3slmvUty0G5uS1gtLcEfodF65MhtS9KiLqI4CBjv2HAHLzlmrjWKkwv2s8iotiEiI4kf7NT48MCU9AvyXR22Q8iqJN4n8OaHFhLmTLK',
    useCdn: false,
  })