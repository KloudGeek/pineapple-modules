import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-PoolCleaner',
    templateUrl: './PoolCleaner.component.html',
    styleUrls: ['./PoolCleaner.component.css']
})

export class PoolCleanerComponent implements OnInit {
    constructor(private API: ApiService) { }
	userInput = '';
	apiResponse = 'Press the button above to get the response.';
	doAPIAction(): void {
		this.API.request({
			module: 'PoolCleaner',
			action: 'hello_world',
			user_input: this.userInput
		}, (response) => {
			this.apiResponse = response;
		})
	}

    ngOnInit() {
    }
}
