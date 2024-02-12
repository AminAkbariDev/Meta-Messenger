import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1754892",
  key: "854b627a76f67695725e",
  secret: "e9aa33a956ed6d4765c3",
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("854b627a76f67695725e", {
  cluster: "eu",
  forceTLS: true,
});
