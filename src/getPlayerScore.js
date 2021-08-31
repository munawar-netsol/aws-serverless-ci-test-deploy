
const Responses = require('./API_Responses');
const tableName = process.env.tableName;
const Dynamo = require('./Dynamo');

exports.handler = async event => {
    console.log('event', event);    
    if (!event.pathParameters || !event.pathParameters.ID) {
        return Responses._400({message: '   '});
    }
    let ID = event.pathParameters.ID;
    const user = await Dynamo.get(ID, tableName)
                    .catch(err =>{
                        console.log("Error: DynamoDb table get error: " + err);
                        return null;
                    });
    
    if (!user) {
        return Responses._400({ message: 'Failed to get User by ID'});
    }
    
    return Responses._200(user);
    
}
