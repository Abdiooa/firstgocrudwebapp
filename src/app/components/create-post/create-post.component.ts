import { Component } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  post: Post = {
    Title: '',
    Body: ''
  };

  submitted = false;

  constructor(private postService: PostService) {}

  savePost(): void {
    const data = {
      title: this.post.Title,
      body: this.post.Body
    };

    this.postService.createPost(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  newPost(): void {
    this.submitted = false;
    this.post = {
      Title: '',
      Body: ''
    };
  }
}
