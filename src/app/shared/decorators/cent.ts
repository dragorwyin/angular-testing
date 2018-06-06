const isMethodDecorator = descriptor => descriptor;

export function Cent(
  target: Object,
  propertyKey: string,
  descriptor: PropertyDescriptor
): any {
  // It is method decorator.
  if (isMethodDecorator(descriptor)) {
    const oldValue = descriptor.value;
    descriptor.value = function () {
      const args = [];

      for (let i = 0; i < arguments.length; i++) {
        args[i] = (arguments[i] / 100);
      }

      return oldValue.apply(null, args);
    };

    return descriptor;
  }
}

export function cent(
  target: Object,
  propertyKey: string
): any {
  let val = target[propertyKey];

  // property getter
  const getter = function () {
    return val / 100;
  };

  // property setter
  const setter = function (newVal) {
    val = newVal;
  };

  // Create new property with getter and setter
  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter
  });
}