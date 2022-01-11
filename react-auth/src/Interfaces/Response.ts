export default interface IResponse {
    modifiedCount?: number,
    acknowledged?: boolean,
    success?:boolean, 
    data?: any
}