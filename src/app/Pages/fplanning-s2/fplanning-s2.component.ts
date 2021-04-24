import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FunctionService } from '../../Services/function.service';

@Component({
  selector: 'app-fplanning-s2',
  templateUrl: './fplanning-s2.component.html',
  styleUrls: ['./fplanning-s2.component.scss']
})
export class FPlanningS2Component implements OnInit {
  arr: any;
  fplan_s2_data: Object;
  availableTrucks: Object;
  rftAvailableTrucks: Object;
  selected_truck: String[];
  DelData: any;
  requiredTruck: Number;

  currentOrder: any;
  truckList: Map<string, any> = new Map<string, any>();
  constructor(private functionService: FunctionService) { }

  ngOnInit(): void {
    this.selected_truck = Array();

    this.arr = JSON.parse(localStorage.getItem('arr'));
    console.log(this.arr);

    this.functionService.getDelNoFromFreightOrderNo(this.arr).subscribe((res: any) => {
      this.fplan_s2_data = res;
      console.log(this.fplan_s2_data);
    });
  }
  //available trucks
  onTruckAvailabilityClicked() {
    this.functionService.availableTrucks().subscribe((res: any) => {
      this.availableTrucks = res;
      console.log(this.availableTrucks);
    });
  }
  //rft
  onRFTClicked() {
    this.functionService.rftAvailableTrucks().subscribe((res: any) => {
      this.availableTrucks = res;
      console.log(this.availableTrucks);
    });
  }

  onDelNoClicked(DelData) {
    this.DelData = DelData;
    //console.log(this.DelData);
  }
  onTruckClicked(selected_truck) {
    this.selected_truck = selected_truck;

    /*console.log('requiredTruck: ', this.DelData['requiredTruck']);
    console.log('truckSize-Left: ', this.DelData['requiredTruckSize']);
    console.log('availableTruck', this.selected_truck);
    console.log('truckSize-right', this.selected_truck['availableTruckSize']);*/
    if ((this.DelData['requiredTruckSize'] === this.selected_truck['availableTruckSize']) && this.selected_truck.length != this.DelData['requiredTruck']) {

      console.log("SELECTED TRUCK: ", this.selected_truck);
    } else {
      console.log("select ", this.DelData['requiredTruckSize'], "truck size");
    }

  }

  onOrderClick(item: any) {
    this.currentOrder = item;
    console.log(this.currentOrder);
    this.truckList.clear();
  }

  isThere(truckId: string) {
    if (this.truckList.has(truckId)) {
      return true;
    }
    return false;
  }


  getTruckNumber() {
    let data = [];
    this.truckList.forEach((value, key) => {
      data.push(value.registrationNumber);
    });
    return data;
  }

  onAllocateTruck() {
    const registrationNumber = this.getTruckNumber();

    this.functionService.updateVehicleNum(registrationNumber, this.currentOrder.deliveryOrderNumber).subscribe((res: any) => {
      console.log(registrationNumber, this.currentOrder.deliveryOrderNumber);
      console.log(res);
    })

    //refresh delno table
    this.functionService.getDelNoFromFreightOrderNo(this.arr).subscribe((res: any) => {
      this.fplan_s2_data = res;
      console.log(this.fplan_s2_data);
    });

  }

  onTruckClick(item: any) {
    if (this.currentOrder) {
      if (this.truckList.has(item._id)) {
        this.truckList.delete(item._id);
      } else {
        if (this.truckList.size < this.currentOrder.requiredTruck) {
          if (this.currentOrder.requiredTruckSize === item.availableTruckSize) {
            this.truckList.set(item._id, item);
          } else {
            window.alert('Please select correct truck size');
          }
        } else {
          return;
        }
      }
    }
  }
}
