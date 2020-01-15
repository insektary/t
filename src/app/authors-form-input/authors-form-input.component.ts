import {Component, OnInit, Input, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import {AuthorType} from '../interfaces/course';
import {AuthorsService} from '../authors.service';
import {getAuthors} from '../store/selectors/selectors';
import {AppState} from '../interfaces/store';

@Component({
    selector: 'app-authors-form-input',
    templateUrl: './authors-form-input.component.html',
    styleUrls: ['./authors-form-input.component.less'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AuthorsFormInputComponent),
            multi: true
        }
    ]
})
export class AuthorsFormInputComponent implements OnInit {

    @Input() public name: string;
    @Input() public controls = {};
    public authors$: Observable<AuthorType[]>;
    public authors: AuthorType[];
    listIsOpened = false;
    value: AuthorType[] = [];

    constructor(public authorsService: AuthorsService, public store: Store<AppState>) { }

    ngOnInit() {
        this.authorsService.fetchData();

        this.authors$ = this.store.pipe(select(getAuthors));
        this.authors$.subscribe((data) => this.authors = data);
    }

    writeValue(value: AuthorType[]) {
        this.value = value;
    }

    onChange = (value: AuthorType[]) => {

    }

    onTouched = () => {

    }

    addAuthor = (event) => {
        this.value = [...this.value, this.authors.find(({id}) => id === event.target.id)];
        this.onChange(this.value);
        this.onTouched();
        this.listIsOpened = false;
    }

    openList = () => {
        this.listIsOpened = !this.listIsOpened;
    }

    registerOnChange(fn: (value: AuthorType[]) => void) {
        this.onChange = fn;
    }

    registerOnTouched(fn: () => VideoFacingModeEnum) {
        this.onTouched = fn;
    }

    removeAuthor(event) {
        this.value = this.value.filter(({id}) => id !== Number(event.target.id) && id !== event.target.id);
        this.onChange(this.value);
        this.onTouched();
    }
}
