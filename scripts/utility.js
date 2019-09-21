var utility = {};
utility.isEmpty = (string) => {
    let result = ((string === undefined) || (string === '') || (string === null))? true : false;
    return result;
};
utility.makeid = (string) => {
    var result = '';
    var characters = string;
    var charactersLength = characters.length;
    for (var i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};

module.exports = utility;
