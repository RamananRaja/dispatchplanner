import { Component, OnInit } from '@angular/core';
import { FunctionService } from '../../Services/function.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-fplanning-s1',
  templateUrl: './fplanning-s1.component.html',
  styleUrls: ['./fplanning-s1.component.scss']
})
export class FPlanningS1Component implements OnInit {

  fplan_s1_data: Object;
  selected_freight_order: object;

  arr: any;

  form: FormGroup;

  formArr: FormGroup;


  constructor(private functionService: FunctionService, private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      checkArray: this.formBuilder.array([])
    })

    this.formArr = this.formBuilder.group({
      formCheckArray: this.formBuilder.array([])
    })
  }

  onCheckboxChange(e) {
    const checkArray: FormArray = this.form.get('checkArray') as FormArray;

    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: FormControl) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
    console.log(e.target.value);
  }

  submitForm() {
    console.log('selected form value', this.form.value);

    localStorage.setItem('arr', JSON.stringify(this.form.value));

  }

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