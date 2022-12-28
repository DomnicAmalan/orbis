import { ChatBox } from '@orbisclub/modules'
import "@orbisclub/modules/dist/index.modern.css";

let chat_theme = {
  /** Style for main buttons */
  mainCta: {
    background: 'linear-gradient(135deg, #FF94B4 0%, #AA6AFB 100%)'
  },

  /** Style for the connect button */
  connectBtn: {
    background: 'linear-gradient(135deg, #FF94B4 0%, #AA6AFB 100%)'
  },

  /** Style for the messages sent and received */
  messagesContainer: {
    background: '#DDD'
  },
  messageSent: {
    background: 'linear-gradient(135deg, #FF94B4 0%, #AA6AFB 100%)'
  },
  messageReceived: {
    background: '#fff'
  },

  /** Style for the header and footer (input container) */
  header: {
    background: 'linear-gradient(135deg, #FF94B4 0%, #AA6AFB 100%)',
    color: "#FFF"
  },
  footer: {
    background: "#F2F2F2"
  },

  /** Reply text */
  replyLine: {
    borderColor: "#696969"
  },
  replyText: {
    color: "#696969"
  },

  /** Input style */
  input: {
    background: "#FFF",
    borderWidth: 1,
    borderColor: "#DDD"
  }
};

function App() {
  /** The context parameter in the <ChatBox/> object must be your group or channel id or a custom string */
  return(
    <ChatBox
      context="kjzl6cwe1jw147b42j1yjoxyzrzeg3czq5mjm1lrmg5eeq43yutje3f2s0s2n5h"
      theme={chat_theme}
      title="You can use a custom title"
      poweredByOrbis="white" />
  );
}

export default App;
