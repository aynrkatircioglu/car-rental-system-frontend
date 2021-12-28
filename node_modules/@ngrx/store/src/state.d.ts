import { OnDestroy, Provider } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActionsSubject } from './actions_subject';
import { Action, ActionReducer } from './models';
import { ReducerObservable } from './reducer_manager';
import { ScannedActionsSubject } from './scanned_actions_subject';
import * as ɵngcc0 from '@angular/core';
export declare abstract class StateObservable extends Observable<any> {
}
export declare class State<T> extends BehaviorSubject<any> implements OnDestroy {
    static readonly INIT: "@ngrx/store/init";
    private stateSubscription;
    constructor(actions$: ActionsSubject, reducer$: ReducerObservable, scannedActions: ScannedActionsSubject, initialState: any);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<State<any>, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<State<any>>;
}
export declare type StateActionPair<T, V extends Action = Action> = {
    state: T | undefined;
    action?: V;
};
export declare function reduceState<T, V extends Action = Action>(stateActionPair: StateActionPair<T, V> | undefined, [action, reducer]: [V, ActionReducer<T, V>]): StateActionPair<T, V>;
export declare const STATE_PROVIDERS: Provider[];

//# sourceMappingURL=state.d.ts.map