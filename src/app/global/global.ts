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
  client_id: 'b60200260c204392ba14e9cc44621c45',
  cliente_secret: '7c1e657cf9ee4a9bb80862930ba4fb8f',
  apiKey: 'YjYwMjAwMjYwYzIwNDM5MmJhMTRlOWNjNDQ2MjFjNDU6N2MxZTY1N2NmOWVlNGE5YmI4MDg2MjkzMGJhNGZiOGY=',
  redirect_uri: (window.location.hostname === 'localhost') ? 'http://localhost:4444/callback' : 'https://music-sentim.herokuapp.com/callback',
};
