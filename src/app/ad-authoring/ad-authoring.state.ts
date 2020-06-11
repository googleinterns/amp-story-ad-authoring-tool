import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import {AdAuthoring} from './ad-authoring';

export interface AdAuthoringState {
  readonly adAuthorings: ReadonlyArray<AdAuthoring>;
}

@Injectable({
  providedIn: 'root'
})
export class AdAuthoringStateContainer {

    private state$: BehaviorSubject<AdAuthoringState>;

    protected constructor () {
        this.state$ = new BehaviorSubject({
          adAuthorings: [],
        });
    }

    getValue(): AdAuthoringState {
        return this.state$.getValue();
    }

    getState(): Observable<AdAuthoringState> {
      return this.state$.asObservable();
    }

    setState(nextState: AdAuthoringState): void {
        this.state$.next(nextState);
    }
}