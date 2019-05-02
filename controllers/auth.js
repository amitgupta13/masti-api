const { User } = require('../models/user');
const bcrypt = require('bcrypt');

async function signup(req, res){
    let user = await User.findOne({email:req.body.email});
    if(user) return res.status(400).send('User already registered');

    user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        image: req.body.image
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(req.body.password, salt);
    await user.save();

    const token = user.generateAuthToken();

    res.header('x-auth-token', token).send(token);
}

async function signin(req, res){
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Invalid Email or Password');
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('Invalid Email or Password');
    const token = user.generateAuthToken();
    res.send(token);
}

async function profile(req, res){
    const user = await User.findById(req.user._id).select('-password');
    if(!user) return res.status(404).send('User with given Id does not exists');

        res.status(200).send(user)
}

module.exports = {
    signup,
    signin,
    profile
}