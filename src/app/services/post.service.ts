import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

const baseUrl = 'http://localhost:8040/posts'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getAllPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(baseUrl);
  }

  getAPost(id: any): Observable<any> {
    return this.http.get<Post>(`${baseUrl}/${id}`);
  }

  createPost(data: any) : Observable<any>{
    return this.http.post(baseUrl, data);
  }

  updateAPost(id: any, data:any): Observable<any>{
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  deletePost(id: any): Observable<any>{
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
