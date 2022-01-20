enum Options {
    UN = 'username',
    FN = 'firstName',
    LN = 'lastName',
    EMAIL = 'email',
    ADDR = 'address',
    ROLE = 'role',
    NAME = 'name',
    DISHES = 'dishes',
    OPEN = 'open',
    DESC = 'description',
    PRICE = 'price',
    
}

enum Errors {
    BIND_ERR = 'error: ',
    ERR = 'Somthing went wrong!',
    REST_DEL = 'Error occured trying to delete restaurant',
    REST_UPDT = 'Error occured trying to change a restaurant',
    REST_CREATE = 'Error occured trying to add a new restaurant',
    MEAL_CREATE = 'Error occured trying to add a new meal',
}

export {
    Errors,
    Options,

}