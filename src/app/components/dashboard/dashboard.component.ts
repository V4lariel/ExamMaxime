import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer";
import {ComputerService} from "../../services/computer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoading: boolean;
  computers: Computer[];
  constructor(private computerService: ComputerService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.computerService.getAllComputers().subscribe((data: Computer[]) => {
      this.computers = data;
      this.isLoading = false;
    })
  }

}
