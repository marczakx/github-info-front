import { CommitView } from "./commit.view.class"

export class  BranchView {

  constructor(private _name: string, private _lastCommit: CommitView){}

  public get name() {
    return this._name
  }

  public get lastCommit() {
	return this._lastCommit
  }
}
