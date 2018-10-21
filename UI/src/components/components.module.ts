import { NgModule } from '@angular/core';
import { PatientInputComponent } from './patient-input/patient-input';
import { PatientOutputComponent } from './patient-output/patient-output';
import { MetaDataComponent } from './meta-data/meta-data';
import { MrPhotosComponent } from './mr-photos/mr-photos';
import { CtPhotosComponent } from './ct-photos/ct-photos';
import { DimensionalModelComponent } from './dimensional-model/dimensional-model';
@NgModule({
	declarations: [PatientInputComponent,
    PatientOutputComponent,
    MetaDataComponent,
    MrPhotosComponent,
    CtPhotosComponent,
    DimensionalModelComponent],
	imports: [],
	exports: [PatientInputComponent,
    PatientOutputComponent,
    MetaDataComponent,
    MrPhotosComponent,
    CtPhotosComponent,
    DimensionalModelComponent]
})
export class ComponentsModule {}
