import { Injector, NgModule } from '@angular/core';
import { ProjectService } from './models/services/project.service';

export let DIHelper: Injector;

@NgModule({
  providers: [
    ProjectService
  ]
})
export class Helper {

  constructor(private injector: Injector) {
    DIHelper = this.injector;
  }

}
