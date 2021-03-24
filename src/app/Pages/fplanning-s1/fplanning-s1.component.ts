import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../Services/function.service';

@Component({
  selector: 'app-fplanning-s1',
  templateUrl: './fplanning-s1.component.html',
  styleUrls: ['./fplanning-s1.component.scss']
})
export class FPlanningS1Component implements OnInit {

  fplan_s1_data: Object;
  selected_freight_order: object;

  constructor(private functionService: FunctionService) { }

  ngOnInit(): void {
    this.functionService.getFPlan_s1().subscribe((res: any) => {
      //console.log(res);
      this.fplan_s1_data = res;
      console.log(this.fplan_s1_data);
      //this.taskService.saveMatch(this.available_Matches).subscribe((res: any) => {
      //console.log(res);
    });
  }
}