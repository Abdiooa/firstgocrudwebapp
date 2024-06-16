import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/post.service';



@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-lits.component.html',
  styleUrls: ['./posts-lits.component.scss']
})
export class PostsListComponent implements OnInit {
  posts: Post[] = [];
  currentPost: Post = {};
  currentIndex = -1;
  Title = '';

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.retrievePosts();
  }

  retrievePosts(): void {
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        this.posts = (data as any).posts;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }
  

  setActivePost(post: Post, index: number): void {
    this.currentIndex = index;
    this.currentPost = post;
  }
  searchTitle(): void {
    this.postService.getAllPosts().subscribe({
      next: (data) => {
        const posts = (data as any).posts;
        this.posts = posts.filter((post: Post) => post.Title?.includes(this.Title));
        console.log(posts);
      },
      error: (e) => console.error(e)
    });
  }
}
