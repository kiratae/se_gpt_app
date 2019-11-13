export class EventFilter {
    private _keyword?: string;

    get keyword(): string { return this._keyword; }
    set keyword(keyword: string) { this._keyword = keyword; }
}
