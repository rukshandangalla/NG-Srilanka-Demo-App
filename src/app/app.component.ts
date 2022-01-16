import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { CategoriesReponse, CategoryItem, PlaylistsReponse } from './models/spotify.models';
import { ApiService } from './services/api.service';
import { SpotifyService } from './services/spotify.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isSidebarVisible!: boolean;
  categoriesResponse: CategoriesReponse = {};
  playlistsResponse: PlaylistsReponse = {};

  constructor(private tokenService: TokenService, private apiService: ApiService, private spotifyService: SpotifyService) { }

  async ngOnInit() {
    if (this.tokenService.token === '' || this.tokenService.token === null) {
      await this.apiService.getToken();
    }

    this.categoriesResponse = await this.spotifyService.getCategories();
  }

  async onCategoryItemSelect(item: CategoryItem) {
    this.playlistsResponse = await this.spotifyService.getPlaylistsByCategoryId(item.id);
    this.isSidebarVisible = true;
  }
}
