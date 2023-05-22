# Ring Universus packages

## Usage

- Please enable `yarn` workspaces

```shell
yarn config set workspaces-experimental true
```

- Add npm registry Token via edit `.npmrc` file

```shell
//registry.npmjs.org/:_authToken=npm_My_Token
```

- Publish Packages

```shell
npx lerna publish --no-private
```

## Local link

- Link all

```shell
npx lerna exec -- yarn link
```

- Unlink all

```shell
npx lerna exec -- yarn unlink
```

```shell
yarn link "@ringuniversus/settings"
yarn link "@ringuniversus/contracts"
yarn link "@ringuniversus/types"
```

## Local publish

```shell
npx lerna exec -- yarn prepublishOnly
```
