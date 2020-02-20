import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer";
import {ComputerService} from "../../services/computer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  isLoading: boolean;
  faSpinner = faSpinner;
  computerForm: Computer;
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];
  constructor(private computerService: ComputerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
    this.computerService.getComputerByID(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.computerForm = data;
      this.isLoading = false;
    });
  }
  onSubmit() {
    this.computerService.edit(this.computerForm).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }
}
