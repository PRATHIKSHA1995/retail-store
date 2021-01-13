function checkAuth(req, res, next){
    if (req.isAuthenticated()){
        return res.redirect("/home");
    }
    next();
}

function checkNotAuth(req, res, next){
    if (req.isAuthenticated()){
        return next();
    }
    res.redirect("/login");
}

function checkNotAdmin(req, res, next){
    if (req.isAuthenticated() && req.user.role === 'admin'){
        return next();
    }
    res.redirect("/login");
}

module.exports = { checkAuth, checkNotAuth, checkNotAdmin };
