export class SpotifyTrack {
  public constructor(
    public id: string,
    public name: string,
    public popularity: string,
    public preview_url: string,
    public track_number: string,
    public uri: string,
    public album: {
      id: string,
      name: string,
      release_date: string,
      uri: string,
      images: Array<{
        height: number,
        url: string,
        width: number
      }>,
    },
    public artists: Array<{
      id: string,
      name: string,
      uri: string
    }>
  ){}
}
