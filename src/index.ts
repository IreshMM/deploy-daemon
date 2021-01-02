import { Probot } from "probot";
import { onPush } from "./modules/main/listeners";

export = ({ app }: { app: Probot }) => {
  app.on("push", onPush);
  
};