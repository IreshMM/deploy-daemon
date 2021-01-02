import jenkins from "jenkins";

// Jenkins access information
const JENKINS_LOGIN = process.env.JENKINS_LOGIN;
const JENKINS_PASS = process.env.JENKINS_PASS;
const JENKINS_HOST = process.env.JENKINS_HOST;
const JENKINS_PORT = process.env.JENKINS_PORT;
const JENKINS_SUBPATH = process.env.JENKINS_SUBPATH;

const JENKINS_ACCESS_URL = `http://${JENKINS_LOGIN}:${JENKINS_PASS}@${JENKINS_HOST}:${JENKINS_PORT}/${
  JENKINS_SUBPATH ? JENKINS_SUBPATH : ""
}`;

export const jenkinsInstance = jenkins({
  baseUrl: JENKINS_ACCESS_URL,
  crumbIssuer: true,
});