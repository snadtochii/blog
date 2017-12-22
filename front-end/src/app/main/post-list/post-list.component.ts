import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../core/services/posts';
import { PostModel, ResponseModel } from '../../shared/models/index';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  private unsubscribe$: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  posts: PostModel[] = [];

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getPosts(null).takeUntil(this.unsubscribe$).subscribe((res: ResponseModel<any>) => {
      console.log(res);
      if (res.success) {
        this.posts = res.data.map(el => {
          if ((typeof(el.titleImage) !== 'string')) {
            el.titleImage = '';
          }
          return el;
        });
      } else {
        this.posts = [];
      }
    });
  }
}
