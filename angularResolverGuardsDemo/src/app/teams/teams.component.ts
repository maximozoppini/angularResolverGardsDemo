import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Team } from '../models/team.model';
import { TeamsService } from './teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  public teams: Team[] = [];
  public pageTitle: string = '';

  constructor(private teamService: TeamsService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    //with resolver
    this.route.data.subscribe(data => {
      this.pageTitle = data['pageTitle'];
      const resolvedData = data["resolvedData"];
      this.teams = resolvedData.teams;
    });

    //without resolver
    // this.pageTitle = this.route.snapshot.data['pageTitle'];
    // this.teamService.getTeams().subscribe(
    //   teams => this.teams = teams
    // );
  }

}
