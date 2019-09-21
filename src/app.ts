import {App} from 'jovo-framework';
import {Alexa} from 'jovo-platform-alexa';
import {JovoDebugger} from 'jovo-plugin-debugger';
import {FileDb} from 'jovo-db-filedb';
import {GoogleAssistant} from 'jovo-platform-googleassistant';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
    new Alexa(),
    new GoogleAssistant(),
    new JovoDebugger(),
    new FileDb(),
);


// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
    LAUNCH() {
        return this.toIntent('McScragginsIntent');
    },

    McScragginsIntent() {
        this.tell(`<speak><amazon:effect name="whispered">McScraggins,</amazon:effect>,<break time="2s"/>  <emphasis level="strong">McScraggins</emphasis>, <prosody pitch="x-high">McScraggins</prosody>.</speak>`);
    },

    'AMAZON.CancelIntent'() {
        this.tell('<speak><prosody pitch="x-high">McScraggins!</prosody></speak>');
    },

    'AMAZON.HelpIntent'() {
        this.tell('<speak><prosody pitch="x-high">McScraggins!</prosody></speak>');
    },

});

export {app};
