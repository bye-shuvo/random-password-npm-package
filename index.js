function randomPassword(length){
    const characters ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?";
    let password = "" ;
    for(let i = 0 ; i < length ; i++){
        password += characters.charAt(Math.round(Math.ceil(Math.random() * characters.length)));
    }
    return password ;
}

module.exports = randomPassword ;