import { Category } from '.';

const VoiceCorrupt: Category = {
  description: 'voice corrupt commands.',
  commands: {
    'corrupt': {
      arguments: {},
      aliases: [],
      description: 'toggle corrupt. "allowCorrupt" setting needs to be enabled in order to use this command.'
    },
    'corrupt every': {
      arguments: {
        '[value]': {
          required: false,
          description: 'if not set, it will return the current infrequency instead.'
        },
      },
      aliases: [ 'corrupt infreq', 'corrupt e' ],
      description: 'sets/returns the current infrequency.'
    },
    'corrupt mode': {
      arguments: {
        '[mode]': {
          required: false,
          description: 'has to be either "add", "shiftl", "shiftr", "or", "and", "xor" or "not". if not set, it will return the current mode instead.'
        },
      },
      aliases: [ 'corrupt m' ],
      description: 'sets/returns the current corruption mode.'
    },
    'corrupt rand-sample': {
      arguments: {
        '[value]': {
          required: false,
          description: 'if not set, it will return the current rand-sample value instead.'
        },
      },
      aliases: [ 'corrupt randsample', 'corrupt rs' ],
      description: 'sets/returns the current rand-sample value.'
    },
  }
};

export default VoiceCorrupt;