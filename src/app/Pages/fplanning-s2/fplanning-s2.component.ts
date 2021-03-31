import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../Services/function.service';

@Component({
  selector: 'app-fplanning-s2',
  templateUrl: './fplanning-s2.component.html',
  styleUrls: ['./fplanning-s2.component.scss']
})
export class FPlanningS2Component implements OnInit {

  arr: any;
  fplan_s2_data: Object;

  constructor(private functionService: FunctionService) { }

  ngOnInit(): void {
    this.arr = JSON.parse(localStorage.getItem('arr'));
    console.log(this.arr);

    this.functionService.getDelNoFromFreightOrderNo(this.arr).subscribe((res: any) => {
      this.fplan_s2_data = res;
      console.log(this.fplan_s2_data);
    });
  }

}
