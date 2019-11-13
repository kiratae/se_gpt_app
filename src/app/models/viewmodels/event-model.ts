import { BaseModel } from './base-model';
import { Event } from '../data/event';
import { EventFilter } from '../data/event-filter';
import { ProjectService } from '../services/project.service';
import { DIHelper } from '../../helper';
import { ProjectModel } from './project-model';

export class EventModel extends BaseModel {
    private _keyword: string;
    private _event: Event;
    private _events: Array<EventModel>;
    private _projects: Array<ProjectModel>;

    constructor() {
        super();

        this._event = new Event();
        this._events = [];
        this._projects = [];
    }

    toEventFilter(): EventFilter {
        let filter = new EventFilter();
        filter.keyword = this.keyword;
        return filter;
    }

    fillLookup() {
        DIHelper.get<ProjectService>(ProjectService).getList(null, null).subscribe(
            (res) => {
                this._projects = ProjectModel.createModels(res['data']);
            }
        );
    }

    get keyword(): string { return this._keyword; }
    set keyword(keyword: string) { this._keyword = keyword; }

    get event(): Event { return this._event; }
    set event(event: Event) { this._event = event; }

    get events(): Array<EventModel> { return this._events; }
    set events(events: Array<EventModel>) {
        this._events = [];
        this._events = events;
    }

    get projects(): Array<ProjectModel> { return this._projects; }
    set projects(projects: Array<ProjectModel>) {
        this._projects = [];
        this._projects.concat(projects);
    }
}
