import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
public images: string[];
  public index: number;
  public urlImage: string;
  constructor() { 
  this.index = 0;
    this.images = [
      "http://img1.tapuz.co.il/TapuzAlbums/nemashim/a160b18d-547e-45ec-a1fd-16e17f78e8de.jpg",
      "http://www.nemashim-baby.com/media/catalog/product/cache/1/image/500x500/e77df092ee0522f8e5b4f37f4cbc8c3c/a/7/a78f31e0-0d9e-4791-a159-d2be5ae6c2d5_1_.jpg",
      "http://www.kfar.co.il/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/2/1/2119207_1.jpg"
    ];
    this.urlImage = this.image;
    setInterval(() => {
      this.urlImage = this.image;
    }, 10000)
  }



  public get image(): string {
    this.index++;
    this.index %= this.images.length;
    return this.images[this.index];
  }
  ngOnInit() {
  }

}
