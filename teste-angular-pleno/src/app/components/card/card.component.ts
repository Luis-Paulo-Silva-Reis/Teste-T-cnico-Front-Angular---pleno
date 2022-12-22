import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  posts2: any[] = [];
  carros: any[] = [];
  items: any[] = [];

  // url of your API endpoint
  apiUrl = 'https://my-api.com/endpoint';
  // array to hold the data retrieved from the API
  data: any[] = [];
  // page number and limit for pagination
  page = 1;
  limit = 10;
  http: any;

  constructor() {}

  ngOnInit() {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        // Loop through the array of objects
        for (const post of response.data) {
          this.posts2.push({
            userId: post.albumId,
            id: post.id,
            title: post.title,
            url: post.url,
            thumbnailUrl: post.thumbnailUrl,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get('https://run.mocky.io/v3/24fda311-d8b1-49ca-b35d-74ea1949020d')
      .then((response) => {
        this.data
        // Loop through the array of objects
        /*
        for (let carro of response.data) {
          this.carros.push({
            titulo: carro.data[0].marca_slug,
            id: carro.data[0].id,
          });
        }*/
      });
  }
}
