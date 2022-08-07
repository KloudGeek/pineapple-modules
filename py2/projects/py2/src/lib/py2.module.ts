import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { py2Component } from './components/py2.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: py2Component }
];

@NgModule({
    declarations: [py2Component],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [py2Component]
})
export class py2Module { }
