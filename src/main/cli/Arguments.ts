class Arguments {
  constructor(
    private _number: number | undefined,
    private _category: number | undefined,
    private _trueOrFalse: boolean,
    private _difficulty: string
  ) {}

  get number(): number | undefined {
    return this._number;
  }
  get category(): number | undefined {
    return this._category;
  }
  get trueOrFalse(): boolean {
    return this._trueOrFalse;
  }
  get difficulty(): string {
    return this._difficulty;
  }
}

export default Arguments;
