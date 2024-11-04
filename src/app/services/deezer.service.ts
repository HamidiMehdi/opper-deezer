import {inject, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable, switchMap} from "rxjs";
import {Playlist} from "../models/playlist";
import {Deserialize} from "cerialize";
import {Track} from "../models/track";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  private baseApiUrl: string = environment.apiBaseUrl;
  private userId: number = environment.userId;
  private http: HttpClient = inject(HttpClient);

  constructor() {
  }

  public getPlaylists(): Observable<Playlist[]> {
    return this.http.get<any>(`${this.baseApiUrl}/user/${this.userId}/playlists`).pipe(
      map(data => {
        return Deserialize(data.data, Playlist);
      })
    );
  }

  public getPlaylist(id: number): Observable<Playlist> {
    return this.http.get(`${this.baseApiUrl}/playlist/${id}`).pipe(
      map(data => {
        return Deserialize(data, Playlist);
      })
    );
  }

  public getTracks(id: number): Observable<Track[]> {
    return this.http.get<any>(`${this.baseApiUrl}/playlist/${id}/tracks`).pipe(
      map(data => {
        return Deserialize(data.data, Track);
      })
    );
  }

}
