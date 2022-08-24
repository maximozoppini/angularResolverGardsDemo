import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Team } from '../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  getTeams(): Observable<Team[]>{
    return of([
      {
        id: 1,
        name: 'team 1',
        description: 'description 1',
        participants: 5
      },
      {
        id: 2,
        name: 'team 2',
        description: 'description 2',
        participants: 5
      },
      {
        id: 3,
        name: 'team 3',
        description: 'description 3',
        participants: 5
      },
      {
        id: 4,
        name: 'team 4',
        description: 'description 4',
        participants: 5
      },
      {
        id: 5,
        name: 'team 5',
        description: 'description 5',
        participants: 5
      },
      {
        id: 6,
        name: 'team 6',
        description: 'description 6',
        participants: 5
      },
      {
        id: 7,
        name: 'team 1',
        description: 'description 7',
        participants: 5
      }
    ]).pipe(
      delay(2000)
    );
  }
}
