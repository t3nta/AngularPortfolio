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
  angular: boolean = false;
  typescript: boolean = false;
  javascript: boolean = false;
  python: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  react: boolean = false;
  aspnet: boolean = false;
  nodejs: boolean = false;
  filtering: boolean = false;
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
    if(this.javascript) {
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.python) {
      filterTags.push(Tag.PYTHON);
    }
    if(this.csharp) {
      filterTags.push(Tag.CSHARP);
    }
    if(this.java) {
      filterTags.push(Tag.JAVA);
    }
    if(this.react) {
      filterTags.push(Tag.REACT);
    }
    if(this.aspnet) {
      filterTags.push(Tag.ASPNET);
    }
    if(this.nodejs) {
      filterTags.push(Tag.NODEJS);
    }

    if (this.typescript || this.angular || this.javascript || this.python || this.csharp || this.java || this.react || this.aspnet || this.nodejs) {
      this.filtering = true;
    }
    else {
      this.filtering = false;
    }

    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters() {
    this.typescript = false;
    this.angular = false;
    this.javascript = false;
    this.python = false;
    this.csharp = false;
    this.java = false;
    this.react = false;
    this.aspnet = false;
    this.nodejs = false;
    this.filtering = false;

    this.projects = this.projectService.GetProjects();
    }
}