// ------------------------------------------------------------------
// JOVO PROJECT CONFIGURATION
// ------------------------------------------------------------------

module.exports = {
    alexaSkill: {
       nlu: 'alexa',
    },
    googleAction: {
       nlu: 'dialogflow',
    },
    // endpoint: 'arn:aws:lambda:us-west-2:982879137855:function:mcScraggins',
    // endpoint: '${JOVO_WEBHOOK_URL}',
    stages: {
        local: {
            endpoint: '${JOVO_WEBHOOK_URL}'
        },
        dev: {
            endpoint: 'arn:aws:lambda:us-west-2:982879137855:function:mcScraggins'
        }
    }
};
