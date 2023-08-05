import { Category } from '.';

const Settings: Category = {
  description: 'settings commands.',
  commands: {
    settings: {
      arguments: {},
      aliases: [],
      description: 'lists the settings and the current values.',
    },
    'settings get': {
      arguments: {
        '[key]': {
          required: true,
          description: 'setting name/key.'
        }
      },
      aliases: [],
      description: "get the setting's value."
    },
    'settings remove': {
      arguments: {
        '[key]': {
          required: true,
          description: 'setting name/key.'
        }
      },
      aliases: [ 'settings rm' ],
      description: "remove the setting's value."
    },
    'settings set': {
      arguments: {
        '[key]': {
          required: true,
          description: 'setting name/key.'
        },
        '[value]': {
          required: true,
          description: 'value to set.'
        }
      },
      aliases: [],
      description: "set the setting's value."
    }
  }
};

export default Settings;