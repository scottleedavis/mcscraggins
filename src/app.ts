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

const launchTell = `<speak><amazon:effect name="whispered">McScraggins</amazon:effect>,
                    <voice name="Brian">McScraggins</voice>,
                    <voice name="Russell">McScraggins</voice>,
                    <voice name="Raveena">McScraggins</voice>,
                    <voice name="Joey">McScraggins</voice>,
                    <voice name="Aditi">McScraggins</voice>.</speak>`;


app.setHandler({
    LAUNCH() {
        return this.toIntent('McScragginsIntent');
    },

    McScragginsIntent() {
        this.tell(launchTell);
    },

    'AMAZON.CancelIntent'() {
        this.tell('<speak><prosody pitch="x-high">McScraggins!</prosody></speak>');
    },

    'AMAZON.HelpIntent'() {
        this.tell('<speak><prosody pitch="x-high">McScraggins!</prosody></speak>');
    },

});

export {app};
