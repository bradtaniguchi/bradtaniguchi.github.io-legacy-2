# Static File Generator

This generator is used to create static files from a base template.

## Creating new blog post:

```bash
nx workspace-generator static-file-generator --type=blog --title=my-title
```

## Creating a new projects/snippets/webapps

example:

```bash
nx workspace-generator static-file-generator --type=projects --title=my-project
```

## Running using npm-script

I recently created a new script that can be used to call this script, but its
vastly shorter:

```bash
npm run new -- --type=blog --title=new-script
```
