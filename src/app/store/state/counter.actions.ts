export class IncreaseAction {
  static readonly type = '[Counter] Increase';
  constructor(public payload: number) { }
}

export class DecreaseAction {
  static readonly type = '[Counter] Decrease';
  constructor(public payload: number) { }
}
