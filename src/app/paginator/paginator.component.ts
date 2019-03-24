import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {
@Input() numberOfPages;
pages:number[];
  constructor() { }

  ngOnInit() {

    this.pages=new Array(this.numberOfPages);
  }

}
