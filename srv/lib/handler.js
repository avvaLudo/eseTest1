const client = require ('@sap-cloud-sdk/http-client');
const connectivity = require ('@sap-cloud-sdk/connectivity');


async function getIncident(request){
   
    let oResp= await new Promise(async (resolve, reject) =>{
        client.executeHttpRequest({destinationName:"fabioDest"},{
            method: 'GET',
            url: '/odata/v4/movie/Movie'
        }).then((result)=>{
            resolve(result);
        }).catch((e)=>{
            reject(e);
        });
    });

    return oResp.data;
}

module.exports={
    getIncident
}