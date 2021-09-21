import { Component, OnInit } from '@angular/core' ; import { of } from "rxjs"

;
import { FormBuilder, FormGroup } from "@angular/forms"
import { RxFormBuilder, RxwebValidators } from '@rxweb/reactive-form-validators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-async-validators',
  templateUrl: './async-validators.component.html',
  styleUrls: ['./async-validators.component.css']
})
export class AsyncValidatorsComponent implements OnInit {
  employeeInfoFormGroup: FormGroup

  projectDomains:string[] = [];

  constructor(
      private formBuilder: FormBuilder ,private http: HttpClient) { }

  projectDomainsArray: string[] = ["ECommerce", "Banking", "Educational", "Gaming"];
    
      ngOnInit() {
          this.employeeInfoFormGroup = this.formBuilder.group({
              department:[''],
              projectDomains:['',[], RxwebValidators.noneOfAsync({validatorConfig:of({matchValues:["ECommerce", "Banking","Educational","Gaming"]})})], 
          });
      }

      addProjectDomain(element: any, index: number) {
        var indexOf = this.projectDomains.indexOf(element.value);
        element.checked ? this.projectDomains.push(element.value) : this.projectDomains.splice(indexOf, 1);
        this.employeeInfoFormGroup.controls.projectDomains.setValue(this.projectDomains);
      }

}
