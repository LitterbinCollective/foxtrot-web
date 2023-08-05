import { Category } from '.';

const VoiceEffect: Category = {
  description: 'voice effect commands.',
  commands: {
    effect: {
      arguments: {},
      aliases: [ 'e' ],
      description: 'list all of the available effects'
    },
    'effect add': {
      arguments: {
        '[effect]': {
          required: true,
          description: 'name of the effect.'
        }
      },
      aliases: [ 'e add' ],
      description: 'add effect to the stack.'
    },
    'effect clear': {
      arguments: {},
      aliases: [ 'e clear', 'effect clr', 'e clr' ],
      description: 'clear effect stack.'
    },
    'effect get': {
      arguments: {
        '[id]': {
          required: true,
          description: 'id of the effect in the stack.'
        },
        '[key]': {
          required: true,
          description: 'option key/name.'
        }
      },
      aliases: [ 'e get' ],
      description: "get effect option's value."
    },
    'effect list': {
      arguments: {},
      aliases: [ 'e list', 'effect ls', 'e ls' ],
      description: 'returns the current effect stack.'
    },
    'effect options': {
      arguments: {
        '[id]': {
          required: true,
          description: 'id of the effect in the stack.'
        }
      },
      aliases: [
        'e options',
        'effect opts',
        'e opts',
        'effect settings',
        'e settings'
      ],
      description: "list effect's options and the current values."
    },
    'effect remove': {
      arguments: {
        '[id]': {
          required: true,
          description: 'id of the effect in the stack.'
        }
      },
      aliases: [ 'e remove', 'effect rm', 'e rm' ],
      description: 'remove effect from the stack.'
    },
    'effect set': {
      arguments: {
        '[id]': {
          required: true,
          description: 'id of the effect in the stack.'
        },
        '[key]': {
          required: true,
          description: 'option key/name.'
        },
        '[value]': {
          required: true,
          description: 'value to set.'
        }
      },
      aliases: [ 'e set' ],
      description: "set effect option's value."
    },
  }
};

export default VoiceEffect;