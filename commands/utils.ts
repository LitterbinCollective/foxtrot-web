import { Category } from '.';

const Utils: Category = {
  description: 'utility commands.',
  commands: {
    feedback: {
      arguments: {
        '[feedback]': {
          required: true,
          description: 'your feedback.'
        },
        '-anonymous (-a, -anon)': {
          required: false,
          description: 'your feedback will be anonymous if specified.'
        }
      },
      aliases: [ 'fb' ],
      description: 'send us what do you think of this bot.'
    },
    help: {
      arguments: {},
      aliases: [ '?' ],
      description: "you're here, hi! 👋"
    },
    issue: {
      arguments: {},
      aliases: [ 'bug' ],
      description: 'returns a url to the foxtrot github repository issues page.'
    },
    ping: {
      arguments: {},
      aliases: [],
      description: '🏓'
    },
    source: {
      arguments: {},
      aliases: [ 'src' ],
      description: 'returns a url to the foxtrot github repository page.'
    },
  }
};

export default Utils;