import { Component, OnInit } from '@angular/core'; 
import { ApiService } from '../services/api.service'; 
 
@Component({ 
    selector: 'lib-MyModule', 
    templateUrl: './MyModule.component.html', 
    styleUrls: ['./MyModule.component.css'] 
}) 
export class MyModuleComponent implements OnInit { 
     constructor(private API: ApiService) { } 
  
     apiResponse = 'Press the button above to get the response.'; 
  
     doAPIAction(): void { 
         this.API.request({ 
             module: 'MyModule', 
             action: 'hello_world', 
         }, (response) => { 
             this.apiResponse = response; 
         }) 
     } 
  
     ngOnInit() { 
     } 
 }