import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';;


@Injectable({
  providedIn: 'root'
})

export class SpotifyService {


  getHeader(query: string) {
    const url = environment.baseUrl + 'search?q=' + query;
    let headers = new HttpHeaders();
    headers = headers.append('Authorization', 'Bearer BQBljKu7aqRYgOf8ze6qNSjdlui1yRa3dj600rPzG6b617jr0lo9dD48taEze1SwVjXSwAj6F-8ODI9uXaYK1x-lf7ElnRPl1ZsCGnd8vnyxroKXfCSjOpl8IMtnt5WNTOdoRHGjow');

    return this.http.get(url, { headers });
  }

  constructor(private http: HttpClient) { }

  searchMusic(str: string, type = 'artist') {
    const param = '&offset=0' + '&limit=20' + '&type=' + type + '&market=US';
    const query = str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = 'artists/${id}';
    return this.getArtist(query);
  }
}

