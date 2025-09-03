const notUsed = 'foo';

function uselessCall(...args) {
  console.log(args)
}

uselessCall.apply(null, [0, 1, 2]);
