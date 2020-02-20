import { Component, OnInit } from '@angular/core';
import {Computer} from "../../models/computer";
import {ComputerService} from "../../services/computer.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-computer',
  templateUrl: './add-computer.component.html',
  styleUrls: ['./add-computer.component.css']
})
export class AddComputerComponent implements OnInit {
  computerForm: Computer;
  marqueDisponible: string[];
  typeDisponible: string[];
  categoryDisponible: string[];
  constructor(private computerService: ComputerService,
              private router: Router) { }

  ngOnInit(): void {
    this.computerForm = new Computer();
    this.marqueDisponible = this.computerService.marqueDisponible;
    this.typeDisponible = this.computerService.typeDisponible;
    this.categoryDisponible = this.computerService.categoryDisponible;
  }
  onSubmit() {
    this.computerService.add(this.computerForm).subscribe(data => {this.router.navigate(['/dashboard'])})
  }
}
