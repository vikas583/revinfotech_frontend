import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    NgxUiLoaderModule,
    NgxUiLoaderConfig,
    SPINNER,
    POSITION,
    PB_DIRECTION,
} from "ngx-ui-loader";
const ngxUiLoaderConfig: NgxUiLoaderConfig = {
    bgsColor: "red",
    bgsPosition: POSITION.bottomCenter,
    bgsSize: 40,
    bgsType: SPINNER.rectangleBounce, // background spinner type
    fgsType: SPINNER.chasingDots, // foreground spinner type
    pbDirection: PB_DIRECTION.leftToRight, // progress bar direction
    pbThickness: 5, // progress bar thickness
};
@NgModule({
    exports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        // ToastrModule,

    ],
    imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    ], providers: []

})
export class CommonImport { }
