import { SpotifyTrack } from '../../results/components/player/models/spotify-track';

export class Song {
  public constructor(
    public artist: {
      name: string
    },
    public track: {
      name: string,
      text: string,
      text_en: string,
      lang: {
        code: string,
        name: string
      }
    },
    public emotion: {
      sadness: number,
      joy: number,
      fear: number,
      disgust: number,
      anger: number,
    },
    public sentiment: {
      polarity: number,
      type: string
    },
    public copyright: {
      notice: string,
      artist: string,
      text: string
    },
    public spotifyTrack: SpotifyTrack
  ){}
}
