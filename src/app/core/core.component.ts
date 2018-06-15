import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  @Input()
  title = 'Application';

  constructor() { }

  ngOnInit() {
  }

}
