import { Component, OnInit, Output, EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthentication } from 'src/app/services/user/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../../models/user.model';
import { ProjectmanagementComponent } from 'src/app/pages/projectmanagement/projectmanagement.component';
import { ProjectService } from 'src/app/services/project/project.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  // panelOpenState = false;
  userDetails: User = null;
  @Output() SidenavToggle = new EventEmitter();

  menuContext = [];
  selectedProject = 'Selected a project';
  constructor(
    public userAuth: UserAuthentication,
    private router: Router,
    private afAuth: AngularFireAuth,
    private projectManagement: ProjectmanagementComponent,
    public projectService: ProjectService
  ) {
    afAuth.user.subscribe(usr => this.userDetails = usr);
    // if (this.projectManagement.data !== undefined) {
    //   this.menuContext = this.projectManagement.data;

    //   console.log(this.menuContext);
    // }
  }
  async ngOnInit() {
    this.getProjectId();
  }

  onSidenavToggle() {
    this.SidenavToggle.emit();
  }
  onClickMenuContext(menuContent) {
    switch (menuContent) {
      case this.menuContext[0]:
        this.selectedProject = String(menuContent);
        console.log(menuContent + ' clicked!'); break;
      case this.menuContext[1]:
        this.selectedProject = String(menuContent);
        console.log(menuContent + ' clicked!'); break;
      case this.menuContext[2]:
        this.selectedProject = String(menuContent);
        console.log(menuContent + ' clicked!'); break;
    }
  }
  async getProjectId() {
    console.log(this.projectService.pid);
    await this.projectService.pInfo.map((i) => this.menuContext.push(i.id));
    console.log(this.menuContext);
  }
}
