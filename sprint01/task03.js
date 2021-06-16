function longestLogin(loginList) {
    function findLogin(total, login){
        if (total.length > login.length){
            return total
        } else{
           return login
        }
    }
    return loginList.reduce(findLogin)
}

console.log(longestLogin('user213','Defect113', 'Person'))