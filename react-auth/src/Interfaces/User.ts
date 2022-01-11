export default interface IUser {
    _id?: String,
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    address: String,
    hash?: String,
    salt?: String,
    role?: String
} 