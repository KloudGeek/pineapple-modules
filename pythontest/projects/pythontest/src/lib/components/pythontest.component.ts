import { Component, OnInit } from '@angular/core'; 
import { ApiService } from '../services/api.service'; 
 
@Component({ 
    selector: 'lib-pythontest', 
    templateUrl: './pythontest.component.html', 
    styleUrls: ['./pythontest.component.css'] 
}) 
export class pythontestComponent implements OnInit { 
     constructor(private API: ApiService) { } 
  
     apiResponse = 'Press the button above to get the response.'; 
  
     doAPIAction(): void { 
         this.API.request({ 
             module: 'pythontest',
             action: 'hello_world'
         }, (response) => { 
             this.apiResponse = response; 
         }) 
     } 
  
     ngOnInit() { 
     } 
 }
