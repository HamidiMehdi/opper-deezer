import {Component, inject} from '@angular/core';
import {DeezerService} from "../../services/deezer.service";
import {Playlist} from "../../models/playlist";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-playlist-list',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    RouterLink
  ],
  templateUrl: './playlist-list.component.html',
  styleUrl: './playlist-list.component.css'
})
export class PlaylistListComponent {

  private deezerService: DeezerService = inject(DeezerService);
  playlists$: Observable<Playlist[]> = this.deezerService.getPlaylists();

  constructor() {
  }
}
