export class Paging {
    private _pageNo: number;
    private _pageSize: number;
    private _totalPage: number;

    get pageNo(): number { return this._pageNo; }
    set pageNo(pageNo: number) { this._pageNo = pageNo; }

    get pageSize(): number { return this._pageSize; }
    set pageSize(pageSize: number) { this._pageSize = pageSize; }

    get totalPage(): number { return this._totalPage; }
    set totalPage(totalPage: number) { this._totalPage = totalPage; }
}
