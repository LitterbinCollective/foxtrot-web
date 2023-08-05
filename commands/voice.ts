import { Category } from '.';

const Voice: Category = {
  description: 'voice commands.',
  commands: {
    bitrate: {
      arguments: {
        '[bitrate]': {
          required: false,
          description: 'if not set, it will return the current bitrate instead.'
        }
      },
      aliases: ['br', 'b'],
      description: 'sets/returns the opus encoder bitrate.'
    },
    current: {
      arguments: {},
      aliases: ['nowplaying', 'np', 'curplay', 'c'],
      description: 'returns the currently playing track.'
    },
    join: {
      arguments: {},
      aliases: ['j', 'connect'],
      description: 'connects the bot to the voice channel.'
    },
    leave: {
      arguments: {},
      aliases: [ 'l', 'gtfo', 'stop' ],
      description: 'disconnects the bot from the voice channel. ' +
        'if the bot is sitting alone in the voice channel, you can ' +
        'disconnect it without joining the voice channel it is on.'
    },
    sfx: {
      arguments: {
        '[sfx]': {
          required: true,
          description: 'chatsound script.'
        }
      },
      aliases: [ 'saysound' ],
      description: 'plays a chatsound (sound effect).'
    },
    skip: {
      arguments: {},
      aliases: [ 's', 'next' ],
      description: 'skips to the next item in the queue.'
    },
    volume: {
      arguments: {
        '[volume]': {
          required: false,
          description: 'volume in percentages (e.g. 100, 200). if not set, it will return the current volume instead.'
        }
      },
      aliases: [ 'v' ],
      description: 'sets/returns the volume.'
    },
  }
};

export default Voice;