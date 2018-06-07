import { Activable } from '../shared/mixins/activable';
import applyMixins from '../shared/mixins/apply-mixins';

export default class SmartObject implements Activable {
  isActive = false;

  activate: () => void;
  deactivate: () => void;

  constructor() { }

  interact() {
    this.activate();
  }
}

applyMixins(SmartObject, [Activable]);
