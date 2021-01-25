# How to

## Compile your code
```bash
yarn tsc
```

## Generate Declarations
```bash
yarn tsc --declaration --emitDeclarationOnly --outDir types
```


## Publish npm package


```bash
npm version patch | minor | major
```

```bash
git push --tags
```

```bash
git push
```

```bash
npm publish
```
