import { BaseModel } from './base-model';
import { Project } from '../data/project';
import { ProjectFilter } from '../data/project-filter';

export class ProjectModel extends BaseModel {
    private _projectId?: number;
    private _name: string;
    private _methodology: string;
    private _startDate: Date;
    private _endDate: Date;
    private _note?: string;

    private _keyword: string;
    private _projects: Array<ProjectModel>;

    constructor(project?: Project) {
        super();
        this.projectId = project && project.project_id || undefined;
        this.name = project && project.name || undefined;
        this.methodology = project && project.methodology || undefined;
        this.startDate = project && project.start_date || undefined;
        this.endDate = project && project.end_date || undefined;
        this.note = project && project.note || undefined;

        this._projects = new Array();
    }

    static createModels(projects: Array<Project>): Array<ProjectModel> {
        let list: Array<ProjectModel> = [];
        projects.forEach(project => {
            list.push(new ProjectModel(project));
        });
        return list;
    }

    toEventFilter(): ProjectFilter {
        let filter = new ProjectFilter();
        filter.keyword = this.keyword;
        return filter;
    }

    toDataModel(): Project {
        let project = new Project();
        project.project_id = this.projectId;
        project.name = this.name;
        project.methodology = this.name;
        project.start_date = this.startDate;
        project.end_date = this.endDate;
        project.note = this.note;
        return project;
    }

    get projectId(): number { return this._projectId; }
    set projectId(projectId: number) { this._projectId = projectId; }

    get name(): string { return this._name; }
    set name(name: string) { this._name = name; }

    get methodology(): string { return this._methodology; }
    set methodology(methodology: string) { this._methodology = methodology; }

    get startDate(): Date { return this._startDate; }
    set startDate(startDate: Date) { this._startDate = startDate; }

    get endDate(): Date { return this._endDate; }
    set endDate(endDate: Date) { this._endDate = endDate; }

    get note(): string { return this._note; }
    set note(note: string) { this._note = note; }

    get keyword(): string { return this._keyword; }
    set keyword(keyword: string) { this._keyword = keyword; }

    get events(): Array<ProjectModel> { return this._projects; }
    set events(projects: Array<ProjectModel>) {
        this._projects = [];
        this._projects.concat(projects);
    }
}
