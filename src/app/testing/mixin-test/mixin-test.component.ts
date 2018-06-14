import { Component, OnInit } from '@angular/core';
import SmartObject from './smart-object';
import { isActivable } from '../../shared/mixins/activable';

@Component({
  selector: 'app-mixin-test',
  templateUrl: './mixin-test.component.html',
  styleUrls: ['./mixin-test.component.scss']
})
export class MixinTestComponent implements OnInit {

  isActive = false;
  isActivable = false;

  constructor() { }

  ngOnInit() {
    const smartObj = new SmartObject();

    this.isActivable = isActivable(smartObj);
    this.isActive = smartObj.isActive;

    smartObj.interact();

    setTimeout(() => {
      this.isActive = smartObj.isActive;
    }, 1000);
  }
}
