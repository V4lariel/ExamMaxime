import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer";
import {ComputerService} from "../../services/computer.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-computer',
  templateUrl: './edit-computer.component.html',
  styleUrls: ['./edit-computer.component.css']
})
export class EditComputerComponent implements OnInit {
  isLoading: boolean;
  computerForm: Computer;
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];
  constructor(private computerService: ComputerService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
    this.computerService.getComputerByID(+this.route.snapshot.paramMap.get('id')).subscribe((data) => {
      this.router.navigate(['/dashboard'])
    });
  }
  onSubmit() {
    this.computerService.edit(this.computerForm).subscribe(data => {
      this.router.navigate(['dashboard']);
    });
  }
}
