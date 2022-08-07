import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyModuleComponent } from './components/MyModule.component';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from './modules/material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';

import {FormsModule} from '@angular/forms';

const routes: Routes = [
    { path: '', component: MyModuleComponent }
];

@NgModule({
    declarations: [MyModuleComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
    ],
    exports: [MyModuleComponent]
})
export class MyModuleModule { }
