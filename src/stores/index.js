import {configure, observable, action, flow} from "mobx";

// import {ElvClient} from "elv-client-js"
import {FrameClient} from "elv-client-js/src/FrameClient";

// Force strict mode so mutations are only allowed within actions.
configure({
  enforceActions: "always"
});

class RootStore {
  @observable initialized = false;

  constructor() {}

  @action.bound
  // eslint-disable-next-line require-yield
  InitializeClient = flow(function * () {
    this.client = new FrameClient({
      target: window.parent,
      timeout: 30
    });

    // Do any additional initialization here

    this.initialized = true;

    // If app can be used with full elv-client-js, you can detect if the app is within an iframe to
    // determine which client to use:

    /*
    let client;
    // Initialize ElvClient or FrameClient
    if(window.self === window.top) {
      const ElvClient = (yield import("elv-client-js")).ElvClient;

      client = yield ElvClient.FromConfigurationUrl({
        configUrl: EluvioConfiguration["config-url"],
      });

      const wallet = client.GenerateWallet();
      const mnemonic = wallet.GenerateMnemonic();
      const signer = wallet.AddAccountFromMnemonic({mnemonic});

      client.SetSigner({signer});
    } else {
      // Contained in IFrame
      client = new FrameClient({
        target: window.parent,
        timeout: 30
      });
    }
   */

  });
}

export const rootStore = new RootStore();

