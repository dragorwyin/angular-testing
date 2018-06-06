import { Cent } from './shared/decorators/cent';

export default class Prices {
  @Cent
  sum(...args) {
    return [...args].reduce((ac, v) => ac + v);
  }
}
