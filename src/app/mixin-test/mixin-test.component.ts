import { Component, OnInit } from '@angular/core';
import { Activable, isActivable } from '../shared/mixins/activable';
import applyMixins from '../shared/mixins/apply-mixins';
import SmartObject from './smart-object';

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
