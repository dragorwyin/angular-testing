// Activable Mixin
export class Activable {
  isActive: boolean;
  activate(): void {
    this.isActive = true;
  }
  deactivate(): void {
    this.isActive = false;
  }
}

// Type Guard
export function isActivable(arg: any): arg is Activable {
  return (
    arg.activate !== undefined &&
    arg.deactivate !== undefined &&
    arg.isActive !== undefined
  );
}
