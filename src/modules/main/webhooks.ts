import { Router } from "express";
import bodyParser from "body-parser";
import { onJenkinsNotifyJobCompletion } from "./listeners";

const router = Router();
router.use(bodyParser.json());

router.post('/jenkinsjobcompeletion', onJenkinsNotifyJobCompletion);

export default router;