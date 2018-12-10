function Test_axios_es5(req, resp){
    
    if(typeof axios_es5 === 'object'){
        if(Object.getOwnPropertyNames(axios_es5).length === 0){
            log("False");
            resp.error("False");
        } else{
            log("True");
            resp.success("True");
        }

    } else if(typeof axios_es5 === 'function'){
        var tempPropObj = Object.getOwnPropertyNames(axios_es5);
        if (axios_es5.prototype && typeof axios_es5.prototype.constructor  === 'function'){
            log("True");
            resp.success("True");
        } else {
            log("False");
            resp.error("False");
        }
    }

}
