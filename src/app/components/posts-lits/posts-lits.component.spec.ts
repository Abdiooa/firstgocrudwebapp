import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostsListComponent } from './posts-lits.component';


describe('PostsLitsComponent', () => {
  let component: PostsListComponent;
  let fixture: ComponentFixture<PostsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PostsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
