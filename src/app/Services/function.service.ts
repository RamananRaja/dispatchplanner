import { Injectable } from '@angular/core';
import { WebReqService } from '../Services/web-req.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionService {
  constructor(private webreqservice: WebReqService) {
  }

  getFPlan_s1() {
    return this.webreqservice.get(`fplan-s1`);
  }

  getFPlan_s2() {
    return this.webreqservice.get(`get-delno-for-s1`);
  }

  getDelNoFromFreightOrderNo(arr: Object) {
    //console.log('from functionService.ts', { arr });
    return this.webreqservice.getDelNo(`get-delno`, { arr });
  }

  availableTrucks() {
    return this.webreqservice.get('trucks-available');
  }

  rftAvailableTrucks() {
    return this.webreqservice.get('rft-trucks-available');
  }

  updateVehicleNum(vehNum: String[], delNum: Number) {
    return this.webreqservice.post('updateVehicleNumber', { vehNum, delNum });
  }
}
