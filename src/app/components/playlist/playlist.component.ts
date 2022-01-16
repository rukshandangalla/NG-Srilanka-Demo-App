import { Component, Input, OnInit } from '@angular/core';
import { Playlists, PlaylistsItem } from 'src/app/models/spotify.models';
import { BroadcastService } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {

  @Input() playlists!: Playlists | undefined;

  constructor(private broadcastService: BroadcastService) { }

  ngOnInit(): void {
  }

  SelectPlaylist(item: PlaylistsItem): void {
    this.broadcastService.broadcast("ON_PLAYLIST_SELECT", item.name);
  }
}
