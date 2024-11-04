import { Routes } from '@angular/router';
import {PlaylistListComponent} from "./pages/playlist-list/playlist-list.component";
import {PlaylistDetailsComponent} from "./pages/playlist-details/playlist-details.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [{
  path: '',
  redirectTo: 'playlists',
  pathMatch: 'full'
}, {
  path: 'playlists',
  children: [{
    path: '',
    component: PlaylistListComponent,
    title: 'Opper - Liste des playlists'
  }, {
    path: ':id',
    component: PlaylistDetailsComponent,
    title: 'Opper - Detail de la playlist'
  }],
}, {
  path: '**',
  component: NotFoundComponent,
  title: 'Opper - Page introuvable'
}];
