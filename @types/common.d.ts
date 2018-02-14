declare interface IHash<T> {
    [key: string] : T    
}
declare interface IPool extends IPolymerTemplateItem{
    companyID?: number | undefined;
    iD?: number | undefined;
    parentID?: number | undefined;
    establishmentID?: number | undefined;
    dateCreated?: Date | undefined;
    name?: string | undefined;
    level?: number
    parent?: string;
}