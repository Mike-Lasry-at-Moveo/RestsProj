import CryptoJS from 'crypto-js'


const encryptString = (plainText: string) =>{ 
    return CryptoJS.AES.encrypt(plainText, 'secretkey').toString();
}

const decryptString = (cipherText: string) =>{ 
    return CryptoJS.AES.decrypt(cipherText, 'secretkey').toString(CryptoJS.enc.Utf8);
}

const encryptJson = (plainObject: any) =>{ 
    return CryptoJS.AES.encrypt(JSON.stringify(plainObject), 'secretkey').toString();
}

const decryptJson = (cipherObject: string) =>{ 
    return JSON.parse(CryptoJS.AES.decrypt(cipherObject, 'secretkey').toString(CryptoJS.enc.Utf8));
}


const securityService = {
    encryptString,
    decryptString,
    encryptJson,
    decryptJson,
}; export default securityService;