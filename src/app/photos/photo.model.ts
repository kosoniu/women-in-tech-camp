
export class Photo {

  id: number;
  albumId: number;
  thumbnailUrl: string;
  title: string;
  url: string;

  constructor(id: number, albumId: number, thumbnailUrl: string, title: string, url: string) {
    this.id = id;
    this.albumId = albumId;
    this.thumbnailUrl = thumbnailUrl;
    this.title = title;
    this.url = url;
  }

}
