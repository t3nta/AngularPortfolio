import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectCardComponent } from '../project-card/project-card.component';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { NgFor } from '@angular/common';
import { ProjectsService } from '../_services/projects.service';
import { CollapseModule } from 'ngx-bootstrap/collapse'
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ProjectCardComponent, NgFor, CollapseModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{

  projects = {} as Project[];

  isCollapsed: boolean = true;
  typescript: boolean = false;
  angular: boolean = false;

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle("Pavlo Skyba - Portfolio");
  }  
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter() {
    let filterTags: Tag[] = [];

    if(this.typescript) {
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.angular) {
      filterTags.push(Tag.ANGULAR);
    }
    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }
}