import { Injectable } from '@angular/core';
import { timer, Observable, BehaviorSubject, of } from 'rxjs';
import { debounceTime, tap, switchMap } from 'rxjs/operators';

import { UserInterface, User } from './../models/user.model';

/**
 * Provided by Shared Module
 */
@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserService {
  private user$: BehaviorSubject<UserInterface>;

  /**
   * Fake fetching from server
   */
  private firstFetch = true;

  /**
   * 
   */
  constructor() {
    this.user$ = new BehaviorSubject(new User('Paweł', 'Twardziak', 33));
  }

  /**
   * Get user value
   */
  get user(): UserInterface {
    return this.user$.getValue();
  }

  /**
   * Fake fetching from server
   */
  getUser(): Observable<UserInterface> {
    return this.user$.asObservable().pipe(
      debounceTime(this.firstFetch ? 1000 : 200),
      tap(() => this.firstFetch = false)
    );
  }

  /**
   * Fake posting on server
   * @param user 
   */
  setUser(user: UserInterface): Observable<UserInterface> {
    return timer(1000).pipe(
      switchMap(() => {
        return of(user).pipe(
          tap((user) => {
            this.user$.next(user);
          })
        );
      })
    );
  }
}
