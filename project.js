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
    defaultStage: 'dev',
    stages: {
        local: {
            endpoint: '${JOVO_WEBHOOK_URL}'
        },
        dev: {
            endpoint: 'arn:aws:lambda:us-west-2:982879137855:function:mcScraggins'
        }
    }
};
