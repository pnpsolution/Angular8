import { Injectable } from '@angular/core';
import { State, Action, StateContext } from '@ngxs/store';
import { DecreaseAction, IncreaseAction } from './counter.actions';

export class CounterStateModel {
  public counter: number;
}

const defaults: CounterStateModel = {
  counter: 0
};

@State<CounterStateModel>({
  name: 'counter',
  defaults
})
@Injectable()
export class CounterState {
  @Action(IncreaseAction)
  increase(
    { getState, setState }: StateContext<CounterStateModel>, { payload }: IncreaseAction): void {
    const state = getState();

    setState({
      counter: state.counter + payload
    });
  }

  @Action(DecreaseAction)
  decrease(
    { getState, setState }: StateContext<CounterStateModel>,
    { payload }: DecreaseAction): void {
    const state = getState();

    setState({
      counter: state.counter - payload
    });

  }
}
