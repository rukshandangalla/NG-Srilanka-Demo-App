import { Component, OnInit } from '@angular/core';
import { BroadcastService } from 'src/app/services/broadcast.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  nowPlaying: string = '';
  constructor(private broadcastService: BroadcastService) { }

  ngOnInit(): void {
    this.broadcastService.subscribe('ON_PLAYLIST_SELECT', payload => {
      this.nowPlaying = payload;
    });
  }

}
