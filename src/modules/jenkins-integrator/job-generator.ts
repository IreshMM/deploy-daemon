export function generateJobConfig(
  templateJob: string,
  artifactIdentifier: string,
  callBackUrl: string,
  nexusRepoUrl: string
): string {
  let result = templateJob.replace('ARTIFACTIDENTIFIER', artifactIdentifier)
    .replace('CALLBACKURL', callBackUrl).replace('NEXUSREPOURL', nexusRepoUrl)
  return result;
}