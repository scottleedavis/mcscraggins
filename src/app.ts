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
        this.tell(`McScraggins, McScraggins, McScraggins. `);
    },

    'AMAZON.CancelIntent'() {
        this.tell('McScraggins!');
    },

    'AMAZON.HelpIntent'() {
        this.tell('McScraggins!');
    },

});

export {app};
