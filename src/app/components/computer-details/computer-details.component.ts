import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer";
import {faEdit, faTrash} from "@fortawesome/free-solid-svg-icons";
import {ComputerService} from "../../services/computer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-computer-details',
  templateUrl: './computer-details.component.html',
  styleUrls: ['./computer-details.component.css']
})
export class ComputerDetailsComponent implements OnInit {
  isLoading: boolean;
  computers: Computer[];
  faEdit = faEdit;
  faTrash = faTrash;
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
