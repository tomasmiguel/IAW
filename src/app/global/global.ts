export const lyrics = {
  url: 'https://orion.apiseeds.com/api/music/lyric/',
  apiKey: 'WNFqxVrIFFrjMwNo0yu3mPqSCrWgvoXC56M4GjBTEHLbHlTFlfaU4WME1SXjk9NM'
};

export const sentim = {
  url: 'https://sentim-api.herokuapp.com/api/v1/'
};

export const watson = {
  identify: {
    url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/c4edb753-ac97-40e2-b679-b621d8e40bd7/v3/identify?version=2018-05-01',
    apiKey: 'lM4ASXZNZgDAqVVDFh-8iLyD0INFwF-9NJGZaMV6hT1u'
  },
  translate: {
    url: 'https://api.us-south.language-translator.watson.cloud.ibm.com/instances/c4edb753-ac97-40e2-b679-b621d8e40bd7/v3/translate?version=2018-05-01',
    apiKey: 'lM4ASXZNZgDAqVVDFh-8iLyD0INFwF-9NJGZaMV6hT1u'
  },
  sentiment: {
    url: 'https://api.us-south.natural-language-understanding.watson.cloud.ibm.com/instances/05ddc343-e1e6-4050-abc9-7c86d42b7924/v1/analyze?version=2020-08-01&features=sentiment',
    apiKey: 'DmVI7l2Ao8vhl7l_hxU0t_jnl1a0PSX3iU8OZlsDJg3R'
  },
};

export const spotify = {
  client_id: 'd4fb8e7c1ef44fc4b01f0d047a0c9a52',
  cliente_secret: '3110d9697eac4498ae877006ddf878a0',
  apiKey: 'ZDRmYjhlN2MxZWY0NGZjNGIwMWYwZDA0N2EwYzlhNTI6MzExMGQ5Njk3ZWFjNDQ5OGFlODc3MDA2ZGRmODc4YTA=',
  redirect_uri: 'https://music-sentim.herokuapp.com/callback',
  // redirect_uri: 'http://localhost:4444/callback'
};
