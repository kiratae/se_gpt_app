export class Event {
    public event_id?: number;
    public project_id: number;
    public achievment_id?: number;
    public reward_id?: number;
    public name: string;
    public score: number;
    public note?: string;
    public create_user_id: number;
    public modify_user_id?: number;

    constructor() {}
}
