import { ArtifactType } from "../main/types";
import fs from 'fs';

let jobConfigTemplateWar =
  process.env.JENKINS_JOB_CONFIG_TEMPLATE_WAR ||
  "deployer-war.xml";

let jobConfigTemplateBar =
  process.env.JENKINS_JOB_CONFIG_TEMPLATE_BAR ||
  "deployer-bar.xml";

let nexusRepoUrl = process.env.NEXUS_REPO_URL;

/**
 * @param nexusRepoUrl
 * @param artifactIdentifier
 * @param projectUrl
 * @param projectName
 * @param artifactType
 */
export function initiateDeploymentUsingJenkins(
  nexusRepoUrl: string,
  artifactIdentifier: string,
  projectUrl: string,
  projectName: string,
  artifactType: ArtifactType
) {

}
