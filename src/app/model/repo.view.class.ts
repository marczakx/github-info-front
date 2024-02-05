import { BranchView } from "./branch.view";

export class RepoView {

  constructor (
    private _name: string, 
	private _owner: string, 
	private _branches: BranchView[]
  ){}

  public get name(){
	return this._name;
  }

  public get owner(){
	return this._owner;
  }

  public get branches(){
	return this._branches;
  }

}
