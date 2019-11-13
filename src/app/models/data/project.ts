export class Project {
    private _projectId?: number;
    private _name: string;
    private _methodology: string;
    private _startDate: Date;
    private _endDate: Date;
    private _note?: string;

    constructor() {}

    get project_id(): number { return this._projectId; }
    set project_id(projectId: number) { this._projectId = projectId; }

    get name(): string { return this._name; }
    set name(name: string) { this._name = name; }

    get methodology(): string { return this._methodology; }
    set methodology(methodology: string) { this._methodology = methodology; }

    get start_date(): Date { return this._startDate; }
    set start_date(startDate: Date) { this._startDate = startDate; }

    get end_date(): Date { return this._endDate; }
    set end_date(endDate: Date) { this._endDate = endDate; }

    get note(): string { return this._note; }
    set note(note: string) { this._note = note; }
}
