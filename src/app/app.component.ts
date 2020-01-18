import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {environment} from '../environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
    title = 'angular-mentoring';

    selectedLanguage: string;
    languages: {id: string, title: string}[] = [];

    constructor(private translateService: TranslateService) {}

    ngOnInit(): void {
        this.translateService.use(environment.defaultLocale);
        this.selectedLanguage = environment.defaultLocale;

        this.translateService.get(environment.locales.map(x => `languages.${x}`))
            .subscribe(translations => {
                this.languages = environment.locales.map(x => ({
                        id: x,
                        title: translations[`languages.${x}`],
                    }));
        });
    }

    changeLocale(value) {
        this.selectedLanguage = value;
        this.translateService.use(this.selectedLanguage);
    }
}
