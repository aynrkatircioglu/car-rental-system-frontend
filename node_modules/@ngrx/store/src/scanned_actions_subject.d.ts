import { OnDestroy, Provider } from '@angular/core';
import { Subject } from 'rxjs';
import { Action } from './models';
import * as ɵngcc0 from '@angular/core';
export declare class ScannedActionsSubject extends Subject<Action> implements OnDestroy {
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ScannedActionsSubject, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<ScannedActionsSubject>;
}
export declare const SCANNED_ACTIONS_SUBJECT_PROVIDERS: Provider[];

//# sourceMappingURL=scanned_actions_subject.d.ts.map