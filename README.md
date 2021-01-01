# deploy-daemon

> A GitHub App built with [Probot](https://github.com/probot/probot) that application that monitors pushes to a specific branch and deploys pre-created artifacts to the development environment

## Setup

```sh
# Install dependencies
npm install

# Compile
npm run build

# Run
npm run start
```

## Docker

```sh
# 1. Build container
docker build -t deploy-daemon .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> deploy-daemon
```

## Contributing

If you have suggestions for how deploy-daemon could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2021 Iresh M Dissanayaka <socialexpz1@gmail.com>
