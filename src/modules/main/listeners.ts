import { IssueCreatedEventPayload, PushEventPayload } from "./types";
import { Request, Response } from "express";

export async function onIssueCreated(context: IssueCreatedEventPayload) {
  const issueComment = context.issue({
    body: "Thanks for opening this issue!",
  });
  await context.octokit.issues.createComment(issueComment);
}

export async function onPush(context: PushEventPayload) {

}

export async function onJenkinsNotifyJobCompletion(req: Request, res: Response) {
  
}