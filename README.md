# brzycki

[Brzycki's formula][1] for one-repetition maximum.

## Example

```javascript
import { brzycki } from 'brzycki';

brzycki(100, 6);
// => 116.12903225806451
```

## Installation

```bash
$ npm install brzycki
```

## API

```javascript
import { brzycki } from 'brzycki';
```

### `brzycki(weight: number, reps: number)`

Given `weight` and `reps`, returns Brzycki's estimated one-repetition maximum as
a `number`.

  [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Brzycki
