import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { pythontestComponent } from './components/pythontest.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: pythontestComponent }
];

@NgModule({
    declarations: [pythontestComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [pythontestComponent]
})
export class pythontestModule { }
