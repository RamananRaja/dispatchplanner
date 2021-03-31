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

  getDelNoFromFreightOrderNo(arr: Object) {
    //console.log('from functionService.ts', { arr });

    return this.webreqservice.getDelNo(`get-delno`, { arr });

  }
}
