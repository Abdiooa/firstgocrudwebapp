import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  currentPost: Post = {
    Title: '',
    Body: ''
  };
  editMode = false;

  constructor(private postService: PostService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPost(this.route.snapshot.params["id"]);
  }

  getPost(id: number): void {
    this.postService.getAPost(id).subscribe({
      next: (data) => {
        this.currentPost = (data as any).post;
        console.log(this.currentPost);
      },
      error: (e) => console.error(e)
    });
  }

  deletePost(id: number): void {
    this.postService.deletePost(id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(["/posts"]);
      },
      error: (e) => console.error(e)
    });
  }

  updatePost(): void {
    this.postService.updateAPost(this.currentPost.ID, this.currentPost).subscribe({
      next: (res) => {
        console.log(res);
        this.editMode = false;
      },
      error: (e) => console.error(e)
    });
  }
}
