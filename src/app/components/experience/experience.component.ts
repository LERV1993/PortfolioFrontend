import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  myPortfolio: any;

  constructor(private datosPorfolio:PortfolioService) { }

  ngOnInit(): void {
   this.datosPorfolio.obtenerDatos().subscribe(data=>{
   this.myPortfolio = data;
   });
  }

}
