export  class CommitView {

  constructor(private _message:string, private _sha: string){}

  public get message() {
    return this._message;
  }

  public get sha() {
    return this._sha;
  }

}
