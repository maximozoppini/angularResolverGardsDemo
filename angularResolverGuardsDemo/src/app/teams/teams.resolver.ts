import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { ResolvedTeam } from '../models/team.model';
import { TeamsService } from './teams.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsResolver implements Resolve<ResolvedTeam> {

  constructor(private teamsService: TeamsService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResolvedTeam> {

    /*
      route: ActivatedRouteSnapshot --> let you navigate through every property inside the recent activated route
      such as  paramMap, queryMap, data, etc.

      state: RouterStateSnapshot --> let you navigate through the url tree
    */

    return this.teamsService.getTeams().pipe(
      map(teams => ({teams}))
    );
  }
}
