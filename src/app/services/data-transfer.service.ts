import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommonInformation } from '../models/common-information';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  private commonInformationSource = new BehaviorSubject(new CommonInformation());
  currentCommonInformation = this.commonInformationSource.asObservable();

  changeCommonInformation(newInformation: CommonInformation){
    this.commonInformationSource.next(newInformation);
  }


}
