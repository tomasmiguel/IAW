import { Emotion } from './emotion';
import { Track } from './track';
import { SpotifyTrack } from '../../results/components/player/models/spotify-track';

export class Song {
  public constructor(
    public artist: {
      name: string
    },
    public track: Track,

    public emotion: Emotion,

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
