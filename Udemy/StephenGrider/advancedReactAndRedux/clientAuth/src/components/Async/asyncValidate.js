const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const asyncValidate = (values /*, dispatch */) => {
  console.log('when?', values);
  return sleep(1000).then(() => { // simulate server latency
    if (['john', 'paul', 'george', 'ringo'].includes(values.username)) {
      return { username: 'That username is taken' };
    }
  });
};

export default asyncValidate;
