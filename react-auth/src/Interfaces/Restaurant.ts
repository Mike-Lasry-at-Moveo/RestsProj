export default interface IRestaurant {
    _id?: string,
    name: string,
    imgUrl: string,
    description: string,
    dishes?: string[],
    open?: number,
    address: string,
}