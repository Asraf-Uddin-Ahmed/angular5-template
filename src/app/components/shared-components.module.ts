import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbDatepickerModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { DynamicFormsCoreModule } from '@ng-dynamic-forms/core';
import { DynamicFormsNGBootstrapUIModule } from '@ng-dynamic-forms/ui-ng-bootstrap';
import { FileUploadModule } from 'ng2-file-upload';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule, ReactiveFormsModule, NG_VALIDATORS } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { validateStartsWithoutAbc, customDateRangeValidator, validateUrl, requireCheckbox, requireCheckboxGroup } from '../app.validators';

import { DynamicBootstrapFormComponent } from './dynamic-bootstrap-form/dynamic-bootstrap-form.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MasterSearchComponent } from './master-search/master-search.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap/alert/alert.module';
import { MasterSearchMaterialComponent } from './master-search-material/master-search-material.component';
import { DropdownMaterialComponent } from './dropdown-material/dropdown-material.component';

@NgModule({
  imports: [
    NgbModule.forRoot(),
    NgbDatepickerModule.forRoot(),
    NgbTimepickerModule.forRoot(),
    NgbAlertModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsNGBootstrapUIModule,
    FormsModule,
    ReactiveFormsModule,
    FileUploadModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    CommonModule
  ],
  declarations: [
    DynamicBootstrapFormComponent,
    FileUploadComponent,
    MasterSearchComponent,
    DropdownComponent,
    AlertMessageComponent,
    MasterSearchMaterialComponent,
    DropdownMaterialComponent
  ],
  exports: [
    DynamicBootstrapFormComponent,
    FileUploadComponent,
    MasterSearchComponent,
    DropdownComponent,
    AlertMessageComponent,
    MasterSearchMaterialComponent,
    DropdownMaterialComponent
  ],
  providers: [
    { provide: NG_VALIDATORS, multi: true, useValue: validateStartsWithoutAbc },
    { provide: NG_VALIDATORS, multi: true, useValue: validateUrl },
    { provide: NG_VALIDATORS, multi: true, useValue: requireCheckbox },
    { provide: NG_VALIDATORS, multi: true, useValue: requireCheckboxGroup },
    { provide: NG_VALIDATORS, multi: true, useValue: customDateRangeValidator }
  ]
})
export class SharedComponentsModule { }
