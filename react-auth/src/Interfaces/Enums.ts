enum InputTypes {
    TXT = 'text',
    PW = 'password',
    SUBMIT = 'submit',
}

enum Errors {
    ERR = 'Somthing went wrong!',
    FILL_CREDS = 'All fields must be supplied!',
    PW_MATCH = 'Passwords are not match!',
    AXIOS = 'Error trying to activate axios: ',
    DEL_FAIL = 'Deleting user failed'
}

enum Role {
    ADMIN = 'admin',
    AUTHOR = 'author',
    EDITOR = 'editor',
    CLIENT = 'client',
}

enum Color {
    APP_BG = 'rgb(6, 61, 112)',
    WHEAT = 'wheat',
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
}

enum Str { 
    NA = 'N/A',
    DOT = '.',
    EMPTY = '',
    SPACE = ' ',
    EQUALS = '=',
    EXP = 'exp',
    AUTH = 'authorization',
    BEARER = 'Bearer',
    JWT = 'jwt',
    COLON = ':',
    SEARCH = 'search for restaurants',
    ALL_WEEK = 'All Week',
    SEMI_COLON = ';',
    CHOOSE_VAL = 'Choose a new value',
    WELCOME_B = 'Welcome back!',
    INVALID = "Please fill all fields properly!",
    PASSED_DATE = 'Thu, 01 Jan 1970 00:00:00 GMT',
}

enum Path {
    BASE_URL = "http://127.0.0.1:3500/api",
    UPDT_USR = 'user-details',
    UPDT_REST = 'restaurant-details',
    ID_PARAM = ':id',
    ACCESS_DENIED = 'access-denied',
    
    HOME_SFX = '',
    SEARCH_SFX = 'search',
    PROFILE_SFX = 'profile',
    LOGIN_SFX = 'login',
    ADMIN_SFX = 'admin',
    SIGNUP_SFX = 'signup',
    USERS_SFX = 'users',
    RESTS_SFX = 'restaurants',
}

enum UpdateOptions {
    UN = 'username',
    FN = 'firstName',
    LN = 'lastName',
    EMAIL = 'email',
    ADDR = 'address',
    ROLE = 'role',
    NAME = 'name',
    DISHES = 'dishes',
    OPEN = 'open',
}

enum AdminOptions {
    USERS = 'allUsers',
    RESTAURANTS = 'allRestaurants',
}

enum ClassName {
    APP = 'App',
    NAVBAR = 'navbar',
    POP_DB = 'populateDatabase',

    RESTS_DETS = 'restaurantDetails',
    RESTS_LIST = 'restaurantList',
    RESTS_BADGE = 'restaurantBadge',
    REST_CARD = 'restaurantCard',
    REST_INFO = 'restaurantInformation',

    LOGIN_PAGE = 'loginPage',
    SIGNUP_PAGE = "signupPage",
    HOME_PAGE = 'homePage',
    ADMIN_PAGE = 'adminPage',
    
    ALL_USERS = 'allUsers',
    ALL_RESTS = 'allRestauranuts',
    
    ADMIN_CONTENT = 'adminContent',
    ADMIN_MENU = 'adminMenu',
    ADMIN_CTRL = 'adminControl',
    ADMIN_CNTRLS = 'adminControls',

    UN_INP = 'usernameInput',
    FN_INP = 'firstNameInput',
    LN_INP = 'lastNameInput',
    EMAIL_INP = 'emailInput',
    ADDR_INP = 'addressInput',
    PW_INP = 'passwordInput',
    CNFRM_INP = 'confirmPasswordInput',
    SEARCH_INP = 'searchInput',
    CREDS_INP = 'credentialsInput',

    LOGIN_CNTRLS = 'loginControls',
    LOGIN_CNTRL = 'loginControl',
    
    UPDT_FORM = 'updateForm',

    UPDT_CNTRLS = 'updateControls',
    UPDT_CNTRL = 'updateControl',
    
    LOGIN_ACTNS = 'loginActions',
    LOGIN_ACTN = 'loginAction',

    UPDT_ACTNS = 'updateActions',
    UPDT_ACTN = 'updateAction',
    
    SIGNUP_CNTRLS = 'signupControls',
    SIGNUP_CNTRL = 'signupControl',
    
    SIGNUP_ACTNS = 'signupActions',
    SIGNUP_ACTN = 'signupnAction',
    UPDT_OPTS = 'updateOptions',

    USR_BDG = 'userBadge',
    USR_CARD = 'userCard',
    USR_LIST = 'userList',
    USR_DETS = 'userDetails',
    USR_INFO = 'userInformation',

    UPDT_USR = 'updateUserBtn',
    DEL_USR = 'deleteUserBtn',

    HOME_BTB = 'homeBtn',
    LOGIN_BTN = 'loginBtn',
    LOGOUT_BTN = 'logoutBtn',
    SIGNUP_BTN = 'signupBtn',
    UPDT_BTN = 'updateBtn',
    NAV_BTN = 'navBtn',
    ADMIN_BTN = 'adminBtn',
    PROFILE_BTN = 'profileBtn',

    MSG_BLOCK = 'msgBlock',
    LIST_SEARCH = 'listSearch',
    LIST_ITEMS = 'listItems',
    HOME_ICON_SRC = 'https://img.icons8.com/color/48/000000/home.png',
}

export {
    InputTypes, 
    ClassName,
    Color,
    Errors,
    AdminOptions,
    UpdateOptions,
    Role,
    Path,
    Str,
 };