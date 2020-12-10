# brzycki

[Brzycki's formula][1] for one-repetition maximum.

## Example

``` javascript
var brzycki = require('brzycki');

brzycki(100, 6);
// => 116
```

## Installation

``` bash
$ npm install brzycki
```

## API

``` javascript
var brzycki = require('brzycki');
```

### `brzycki(weight, reps)`

Given _Number_ `weight` and _Number_ `reps`, returns Brzycki's one-repetition
maximum as a _Number_.


   [1]: https://en.wikipedia.org/wiki/One-repetition_maximum#Brzycki
