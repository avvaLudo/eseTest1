const cds = require('@sap/cds');
const helmet = require('helmet');

cds.on('bootstrap', app => {
    app.use(
        helmet({
            contentSecurityPolicy:{
                directives:{
                    ...helmet.contentSecurityPolicy.getDefaultDirectives()
                }
            }
        })
    );

    app.get('/health', (_,res)=>{
        res.status(200).send('Ok')
    });
})

module.exports= cds.server 