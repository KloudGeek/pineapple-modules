import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-PoolCleaner',
    templateUrl: './PoolCleaner.component.html',
    styleUrls: ['./PoolCleaner.component.css']
})

export class PoolCleanerComponent implements OnInit {
    constructor(private API: ApiService) { }
	apiResponse = 'Press the button above to get the version.';
	doAPIAction(): void {
		this.API.APIGet('/api/status', (response) => {
			this.apiResponse = response.versionString;
		})
	}

    ngOnInit() {
    }
}
