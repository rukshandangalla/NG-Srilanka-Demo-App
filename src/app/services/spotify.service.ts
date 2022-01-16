import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Categories, CategoriesReponse, PlaylistsReponse } from '../models/spotify.models';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private apiService: ApiService) { }

  async getCategories() {
    return await lastValueFrom(this.apiService.get<CategoriesReponse>('https://api.spotify.com/v1/browse/categories?country=SL'));
  }

  async getPlaylistsByCategoryId(catId: string) {
    return await lastValueFrom(this.apiService.get<PlaylistsReponse>(`https://api.spotify.com/v1/browse/categories/${catId}/playlists`));
  }
}
