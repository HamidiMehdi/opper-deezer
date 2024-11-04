import {Component, inject, OnInit} from '@angular/core';
import {DeezerService} from "../../services/deezer.service";
import {ActivatedRoute, Params, RouterLink} from "@angular/router";
import {Playlist} from "../../models/playlist";
import {Observable} from "rxjs";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {Track} from "../../models/track";

@Component({
  selector: 'app-playlist-details',
  standalone: true,
  imports: [AsyncPipe, NgIf, RouterLink, NgForOf],
  templateUrl: './playlist-details.component.html',
  styleUrl: './playlist-details.component.css'
})
export class PlaylistDetailsComponent implements OnInit{

  private deezerService: DeezerService = inject(DeezerService);
  private route: ActivatedRoute = inject(ActivatedRoute);

  playlist$: Observable<Playlist>;
  tracks$: Observable<Track[]>;

  ngOnInit(): void {
    const id: number = +this.route.snapshot.params['id']
    this.playlist$ = this.deezerService.getPlaylist(id);
    this.tracks$ = this.deezerService.getTracks(id);
  }

  durationFormatted(duration: number): string
  {
    const hours: number = Math.floor(duration / 3600);
    const minutes: number = Math.floor((duration % 3600) / 60);
    const seconds: number = duration % 60;

    const formattedHours :string = String(hours).padStart(2, '0');
    const formattedMinutes: string = String(minutes).padStart(2, '0');
    const formattedSeconds: string = String(seconds).padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

}
