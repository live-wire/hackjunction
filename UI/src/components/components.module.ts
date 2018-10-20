import { NgModule } from '@angular/core';
import { PatientInputComponent } from './patient-input/patient-input';
import { PatientOutputComponent } from './patient-output/patient-output';
import { MetaDataComponent } from './meta-data/meta-data';
@NgModule({
	declarations: [PatientInputComponent,
    PatientOutputComponent,
    MetaDataComponent],
	imports: [],
	exports: [PatientInputComponent,
    PatientOutputComponent,
    MetaDataComponent]
})
export class ComponentsModule {}
