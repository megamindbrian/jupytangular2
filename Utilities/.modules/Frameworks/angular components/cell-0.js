import {Component, ModuleWithProviders, NgModule} from '@angular/core';
import {COMMON_MODULES} from '../../../imports/core.module';
import {RouterModule, Routes} from '@angular/router';
import {SearchService} from '../../../imports/search.service';

@Component({
    selector: 'bc-search',
    template: `
        <form>
            <md-input-container>
                <input mdInput name="search" required type="text"
                       placeholder="Search"
                       maxlength="100" [(ngModel)]="query" (change)="search()">
            </md-input-container>
        </form>
    `,
    styles: [`
        md-input-container {
            width: 100%;
        }
    `]
})
export class SearchComponent {
    query = '';
    service: SearchService

    constructor(public
) {
}

search()
:
void {
    this.service.search(this.query).subscribe(r => {
    console.log('searched ' + r);
});
}
}

export const COMPONENTS = [
    SearchComponent
];

export const authRoutes: Routes = [
    {
        path: '',
        component: SearchComponent,
        data: {roles: ['anonymous', 'user']}
    }
];
export const routing: ModuleWithProviders = RouterModule.forChild(authRoutes);

@NgModule({
    imports: [
        ...COMMON_MODULES,
        routing
    ],
    declarations: COMPONENTS,
    exports: COMPONENTS
})
export class SearchModule {
}
