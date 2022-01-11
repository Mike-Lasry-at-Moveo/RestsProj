export default interface IAuth {
    // Login requirements
    username: string,
    password: string

    // Additional signup requirements
    firstName?: string,
    lastName?: string,
    email?: string,
    address?: string,
    confirmPassword?: string,
}