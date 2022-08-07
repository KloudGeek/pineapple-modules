import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
    selector: 'lib-PoolCleaner',
    templateUrl: './PoolCleaner.component.html',
    styleUrls: ['./PoolCleaner.component.css']
})
export class PoolCleanerComponent implements OnInit {
    constructor(private API: ApiService) { }

    ngOnInit() {
    }
}
