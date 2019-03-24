import { Component, OnInit,Input } from '@angular/core';
import{BlogPost} from '../blog-post';

@Component({
  selector: 'app-app-blog-post-tile',
  templateUrl: './app-blog-post-tile.component.html',
  styleUrls: ['./app-blog-post-tile.component.scss']
})
export class AppBlogPostTileComponent implements OnInit {

@Input() post :BlogPost;
clickEventDemo:string;

  constructor() { }

  ngOnInit() {
  this.clickEventDemo=this.post.summary;
  }

clickEvent(){
  this.post.summary="updated summary";

}

}
