import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-paginator",
  templateUrl: "./paginator.component.html",
  styleUrls: ["./paginator.component.scss"],
})
export class PaginatorComponent implements OnInit {
  @Input() totalNumberOfPages: number;
  @Output() pageNumEmitter: EventEmitter<number>;
  pageNum: number;

  constructor() {
    this.pageNum = 1;
    this.pageNumEmitter = new EventEmitter();
  }

  emitPageNumber(pageNumber: number) {
    this.pageNum = pageNumber;
    this.pageNumEmitter.emit(pageNumber);
  }

  ngOnInit(): void {}
}
