import { Component, Input} from '@angular/core';
import { Project } from '../_models/Project';
import { NgFor } from '@angular/common';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal';
import { ProjectModalComponent } from '../project-modal/project-modal.component';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input() project = {} as Project;
  bsModalRef?: BsModalRef;

  constructor(private modalService: BsModalService) {

  }

  OpenProjectModal() {
const modalOptions: ModalOptions = {
  class: "modal-lg",
  initialState: {
    project: this.project
  }
};

    this.bsModalRef = this.modalService.show(ProjectModalComponent, modalOptions);
  }
}
