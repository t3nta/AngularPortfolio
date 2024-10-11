import { NgIf } from '@angular/common';
import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccordionModule} from 'ngx-bootstrap/accordion'

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [AccordionModule, NgIf],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  
  constructor(private titleService: Title, private renderer: Renderer2) {
    this.titleService.setTitle("Pavlo Skyba - Resume");
  }  

  DownloadFile() {
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_black');
    link.setAttribute('href', '/AnsøgningPS.pdf');
    link.setAttribute('download', 'AnsøgningPS');
    link.click();
    link.remove();
  }
}
