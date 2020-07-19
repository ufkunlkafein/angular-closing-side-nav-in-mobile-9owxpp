
import { Component, ViewChild, ElementRef} from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/** @title Responsive sidenav */
@Component({
  selector: 'sidenav-responsive-example',
  templateUrl: 'sidenav-responsive-example.html',
  styleUrls: ['sidenav-responsive-example.css'],
})
export class SidenavResponsiveExample {
  @ViewChild('drawer') drawer: any;
 public selectedItem : string = '';
  public isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result: BreakpointState) => result.matches));


  constructor(private breakpointObserver: BreakpointObserver) {}

closeSideNav() {
  if (this.drawer._mode=='over') {
    this.drawer.close();
  }
}
}
