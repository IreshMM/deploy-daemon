import { Context } from "probot";
import { EventPayloads, WebhookEvent } from "@octokit/webhooks";

export type IssueCreatedEventPayload = WebhookEvent<EventPayloads.WebhookPayloadIssues> &
  Pick<
    Context<any>,
    | "octokit"
    | "log"
    | "repo"
    | "issue"
    | "pullRequest"
    | "isBot"
    | "config"
    | "event"
    | "github"
  >;

export type PushEventPayload = WebhookEvent<EventPayloads.WebhookPayloadPush> &
  Pick<
    Context<any>,
    | "octokit"
    | "log"
    | "repo"
    | "issue"
    | "pullRequest"
    | "isBot"
    | "config"
    | "event"
    | "github"
  >;

export enum ArtifactType {
  WAR,
  BAR,
}

export type DeploymentInformation = {
  repoUrl: string
  artifactIdentifier: string
  callbackUrl: string
}