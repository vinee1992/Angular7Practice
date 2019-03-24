import { Component, OnInit } from '@angular/core';
import{BlogPost} from '../blog-post';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

   blogPost :BlogPost[][];
   clickEvent: string;
   currentPage:number;

  constructor() { }

  ngOnInit() {
    this.currentPage=0;
this.blogPost=[

  [
  {title :"post1",summary:"summary1"}, {title :"post2",summary:"summary2"},
  {title :"post3",summary:"summary3"}, {title :"post4",summary:"summary4"}
  ],

  [
  {title :"post5",summary:"summary5"}, {title :"post6",summary:"summary6"},
  {title :"post7",summary:"summary7"}, {title :"post8",summary:"summary8"}
  ],

    [
  {title :"post9",summary:"summary9"}, {title :"post10",summary:"summary10"},
  {title :"post11",summary:"summary11"}, {title :"post12",summary:"summary12"}
  ]
]






  }

  updatePage(newPage){
  this.currentPage=newPage;
}

}



