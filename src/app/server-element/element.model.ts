export class Element {
    private _type: string;
    private _content: string;
    private _name: string;

    constructor(name: string, content: string, type: string) {
        this._type = type;
        this._name = name;
        this._content = content;
    }

    public get type(): string {
        return this._type;
    }

    public set type(value: string) {
        this._type = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get content(): string {
        return this._content;
    }

    public set content(value: string) {
        this._content = value;
    }
}