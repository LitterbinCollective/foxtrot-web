import Search from './search';
import Settings from './settings';
import Utils from './utils';
import Voice from './voice';
import VoiceCorrupt from './voicecorrupt';
import VoiceEffect from './voiceeffect';
import VoiceQueue from './voicequeue';

export interface CommandArgument {
  description: string;
  required: boolean;
};

export interface Command {
  arguments: Record<string, CommandArgument>;
  aliases: string[];
  description: string;
};

export interface Category {
  description: string;
  commands: Record<string, Command>;
};

const Commands: Record<string, Category> = {
  Search,
  Utils,
  Settings,
  Voice,
  VoiceCorrupt,
  VoiceEffect,
  VoiceQueue
};

export const PREFIX = '~';
export default Commands;