import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPagination } from '../../../shared/interfaces/pagination.interface';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
  @Input() pagination?: IPagination;

  @Input() currentPage = 1;

  @Output() changePageEvent = new EventEmitter<number>();

  constructor() {}

  get disabledPrevButton(): boolean {
    return this.currentPage === 1;
  }
 

  handlerNextPage(): void {
    this.changePageEvent.emit(++this.currentPage);
  }

  handlerPrevPage(): void {
    this.changePageEvent.emit(--this.currentPage);
  }
}
