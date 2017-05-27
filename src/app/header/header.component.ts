import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataStorageService} from '../shared/data-storage.service';

import {Response} from '@angular/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  @Output() link=new EventEmitter<string>();
  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit() {
  }

  // openLink(type: string)
  // {
  //   this.link.emit(type);
  // }

  onSaveData() {
    this.dataStorageService.storeRecipe().subscribe(
      (response: Response) => {
        console.log(response);
      },
      (error: Error) => {
        console.log(error);
      }
    );
  }
  onFetchData() {
    this.dataStorageService.getPet();
  }
}
