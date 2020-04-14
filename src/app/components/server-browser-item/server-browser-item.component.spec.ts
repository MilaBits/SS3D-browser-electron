import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerBrowserItemComponent } from './server-browser-item.component';

describe('ServerBrowserItemComponent', () => {
  let component: ServerBrowserItemComponent;
  let fixture: ComponentFixture<ServerBrowserItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerBrowserItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerBrowserItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
