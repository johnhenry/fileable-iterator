![fileable logo](./static/docs/logo.png)

# Fileable Iterator

For use internally with [fileable](https://github.com/johnhenry/fileable) and components.

## Installation

```sh
npm install fileable-iterator
```
## API

### Table of contents

- [function iterator](#function-iterator)
  - [Examples](#examples)

### function iterator

Iterator

| Parameter                  | Type   | Description                                                                            |
| :------------------------- | :----- | :------------------------------------------------------------------------------------- |
| `options`                  | object |                                                                                        |
| `options.folder_context`   | string | Folder into which files should be rendered.                                            |
| `options.template_context` | string | Location of template. Used to determine relative relative paths of certain attributes. |

#### Examples

> ```javascript
> import {iterator} from 'fileable';
> const main = async ()=>{
>  for await(const output of iterator(template, {})){
>    console.log(output);
>  }
> }
> ```

## Todo

- remove unnecessary dependencies
- add proper typescript typeings
