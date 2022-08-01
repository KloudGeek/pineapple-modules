import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoolCleanerComponent } from './components/PoolCleaner.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: PoolCleanerComponent }
];

@NgModule({
    declarations: [PoolCleanerComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [PoolCleanerComponent]
})
export class PoolCleanerModule { }
