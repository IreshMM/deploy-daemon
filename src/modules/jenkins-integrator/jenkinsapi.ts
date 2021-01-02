import { jenkinsInstance } from './init'
import fs from "fs";

function createJob(
  jobConfigFile: string,
  projectName: string,
  callBack: (created: Boolean) => void
) {
  fs.readFile(`./jobconfig/${jobConfigFile}`, "utf8", (err, data) => {
    if (!err) {
      jenkinsInstance.job.create(projectName, data, (err) => {
        if (!err) {
          console.log("job created");
          callBack(true);
        }
      });
    }
  });
}

function ensureJobExistsAndContinue(
  jobConfigFile: string,
  projectName: string,
  continueCallBack: () => void
) {
  console.log("ensureJobExistsAndContinueExecution");

  jenkinsInstance.job.exists(projectName, (error, exists) => {
    if (!exists && !error) {
      console.log("JobDoesNotExist");

      createJob(jobConfigFile, projectName, (created) => {
        if (created) {
          continueCallBack();
        }
      });
    } else {
      continueCallBack();
    }
  });
}

export function startJenkinsJob(
  configFile: string,
  job: string,
  parameters: any,
  callBack?: (err: Error, data: any) => void
) {
  ensureJobExistsAndContinue(configFile, job, () => {
    jenkinsInstance.job.build(
      {
        name: job,
        parameters: parameters,
      },
      callBack ? callBack : console.log
    );
  });
}