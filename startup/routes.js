const bodyParser = require('body-parser');
const error = require('../middleware/error');
const authRoutes = require('../routes/auth');
const projectRoutes = require('../routes/projects');
const cors = require('cors');

module.exports = function(app){
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use('/auth', authRoutes);
    app.use('/projects', projectRoutes);
    app.use(error);
}