import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Photo} from './photo.model';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {

  photos: any[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.httpClient.get<Photo[]>('https://jsonplaceholder.typicode.com/photos')
      .subscribe(photos => {
        this.photos = photos.slice(0, 10);
        console.log(this.photos);
      });
  }

}
