import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";
import { PodService } from "../../services/pod.service";
import { Pod } from "../../pod";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {

  defaultPod: Pod;
  pods: Pod[] = [];
  errorMessage: string;
  showErrorMessage: boolean;

  constructor(private podService: PodService) {

    // initialize a warning message
    this.errorMessage = 'No more pods available!'
    this.showErrorMessage = false;

  }

  ngOnInit() {
    // fetch mock data
    this.podService.getPods().subscribe(pods => {
      // console.log(pods);
      this.pods = pods;

      // activate at least one pod by default
      this.defaultPod = this.pods[0];
      this.defaultPod.isActive = true;
    });
  }

  addPod(event): void {
    for (var i = 0; i < this.pods.length; i++) {
      // console.log('i: ', i)
      if (this.pods[i].isActive == false) {
        this.pods[i].isActive = true;
        // this.togglePod = true;
        break;
      }
      if (i == this.pods.length - 1) {
        this.showErrorMessage = true;
      }
    }
  }

  removePod(index: number): void {
    this.pods[index].isActive = false;

    if (this.showErrorMessage) {
      this.showErrorMessage = false;
    }
  }

}