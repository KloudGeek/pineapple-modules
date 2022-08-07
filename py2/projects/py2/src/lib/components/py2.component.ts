import { Component, OnInit } from '@angular/core'; 
import { ApiService } from '../services/api.service'; 
 
@Component({ 
    selector: 'lib-py2', 
    templateUrl: './py2.component.html', 
    styleUrls: ['./py2.component.css'] 
}) 
export class py2Component implements OnInit { 
     constructor(private API: ApiService) { } 
  
     apiResponse = 'Press the button above to get the response.'; 
  
     doAPIAction(): void { 
         this.API.request({ 
             module: 'py2',
             action: 'hello_world'
         }, (response) => { 
             this.apiResponse = response; 
         }) 
     } 
  
     ngOnInit() { 
     } 
 }
