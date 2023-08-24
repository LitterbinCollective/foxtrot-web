import { Category } from '.';

const VoiceModules: Category = {
  description: 'voice module commands.',
  commands: {
    module: {
      arguments: {
        '[line]': {
          required: false,
          description: 'line to pass to the invoke command, which may contain argument(s) for the specified module.'
        }
      },
      aliases: [ 'm' ],
      description: 'invoke the voice module (if there is any.)'
    },
    'module assign': {
      arguments: {
        '[module]': {
          required: true,
          description: 'name of the module.'
        }
      },
      aliases: [ 'm a', 'module a', 'm assign' ],
      description: 'assign a new module or replace, if there is one.'
    },
    'module destroy': {
      arguments: {},
      aliases: [ 'm d', 'module d', 'm destroy' ],
      description: 'destroy a module, if there is one.'
    },
  }
};

export default VoiceModules;