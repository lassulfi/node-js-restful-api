module.exports = {
    user:(app, req, res) => {
        req.assert("name", "O campo nome é obrigatório").notEmpty();
        req.assert("email", "O campo e-mail é inválido").notEmpty().isEmail();

        let errors = req.validationErrors();

        if(errors){
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }
};