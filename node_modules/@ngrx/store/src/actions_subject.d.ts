import { OnDestroy, Provider } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Action } from './models';
import * as ɵngcc0 from '@angular/core';
export declare const INIT: "@ngrx/store/init";
export declare class ActionsSubject extends BehaviorSubject<Action> implements OnDestroy {
    constructor();
    next(action: Action): void;
    complete(): void;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ActionsSubject, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ActionsSubject>;
}
export declare const ACTIONS_SUBJECT_PROVIDERS: Provider[];

//# sourceMappingURL=actions_subject.d.ts.map