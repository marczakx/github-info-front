
export class Url {

    private static _BASE_URL: string = "http://localhost:3380/";

    public static getBaseUrl () : string{
        return this._BASE_URL;
    }
}