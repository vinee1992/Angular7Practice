import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBlogPostTileComponent } from './app-blog-post-tile.component';

describe('AppBlogPostTileComponent', () => {
  let component: AppBlogPostTileComponent;
  let fixture: ComponentFixture<AppBlogPostTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppBlogPostTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppBlogPostTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
