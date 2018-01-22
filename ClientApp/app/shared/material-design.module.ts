import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { 
  MatChipsModule, MatButtonModule, MatIconModule, MatInputModule, 
  MatSelectModule,MatSliderModule, MatToolbarModule, MatSlideToggleModule, 
  MatCardModule, MatGridListModule, MatMenuModule, MatSidenavModule, 
  MatExpansionModule, MatTabsModule, MatLineModule, MatListModule, MatTableModule, 
  MatProgressSpinnerModule, MatSnackBarModule, MatAutocompleteModule, 
  MatDialogModule, MatCheckboxModule, MatTooltipModule, MatDatepickerModule, MatNativeDateModule, MatRadioModule
} from "@angular/material";
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  imports: [
    CommonModule 
  ],
  exports: [
    MatButtonModule, MatIconModule, MatInputModule, 
    MatSelectModule, MatSliderModule, MatToolbarModule, 
    MatCardModule, MatSlideToggleModule, MatGridListModule, 
    MatMenuModule, MatSidenavModule, MatExpansionModule, 
    MatTabsModule, MatLineModule, MatListModule, MatTableModule, 
    MatProgressSpinnerModule, MatSnackBarModule, CdkTableModule,
    MatAutocompleteModule, MatDialogModule, MatCheckboxModule,
    MatTooltipModule, MatChipsModule, MatDatepickerModule, MatNativeDateModule,
    MatRadioModule
  ],
  declarations: []
})
export class MaterialDesignModule { }