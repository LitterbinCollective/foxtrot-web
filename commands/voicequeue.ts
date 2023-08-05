import { Category } from '.';

const VoiceQueue: Category = {
  description: 'voice queue commands.',
  commands: {
    queue: {
      arguments: {},
      aliases: [ 'q' ],
      description: 'lists the queue.'
    },
    'queue add': {
      arguments: {
        '[url]': {
          required: true,
          description: 'url address to some media.'
        }
      },
      aliases: ['play', 'p', 'q add', 'queue a', 'q a'],
      description: 'adds media to the queue.'
    },
    'queue clear': {
      arguments: {},
      aliases: [ 'q clear', 'queue clr', 'q clr' ],
      description: 'clears the queue.'
    },
    'queue remove': {
      arguments: {
        '[id]': {
          required: true,
          description: 'index of the queue item to remove.'
        }
      },
      aliases: [ 'q remove', 'queue rm', 'q rm' ],
      description: 'removes specific item from the queue.'
    }
  }
};

export default VoiceQueue;