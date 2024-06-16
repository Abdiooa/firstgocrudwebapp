import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { PostsListComponent } from './components/posts-lits/posts-lits.component';

const routes: Routes = [
  { path: '', redirectTo: 'posts',pathMatch: 'full' },
  { path: "posts", component: PostsListComponent },
  { path: "posts/:id", component: PostDetailsComponent },
  { path: "add-post", component: CreatePostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
