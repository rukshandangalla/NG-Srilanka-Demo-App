import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CategoryItem } from 'src/app/models/spotify.models';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input() categoryItem!: CategoryItem;
  @Output() onCategoryItemSelect = new EventEmitter<CategoryItem>();

  constructor() { }

  ngOnInit(): void {
  }

  viewMoreDetails(evt: any): void {
    this.onCategoryItemSelect.emit(this.categoryItem);
  }
}
