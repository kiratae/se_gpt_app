export class Event {
    private _eventId?: number;
    private _projectId: number;
    private _achievmentId?: number;
    private _rewardId?: number;
    private _name: string;
    private _score: number;
    private _note?: string;

    constructor() {}

    get eventId(): number { return this._eventId; }
    set eventId(eventId: number) { this._eventId = eventId; }

    get projectId(): number { return this._projectId; }
    set projectId(projectId: number) { this._projectId = projectId; }

    get achievmentId(): number { return this._achievmentId; }
    set achievmentId(achievmentId: number) { this._achievmentId = achievmentId; }

    get rewardId(): number { return this._rewardId; }
    set rewardId(rewardId: number) { this._rewardId = rewardId; }

    get name(): string { return this._name; }
    set name(name: string) { this._name = name; }

    get score(): number { return this._score; }
    set score(score: number) { this._score = score; }

    get note(): string { return this._note; }
    set note(note: string) { this._note = note; }
}
