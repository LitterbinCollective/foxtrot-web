import { Category } from '.';

const Search: Category = {
  description: 'search services',
  commands: {
    'search deezer': {
      arguments: {
        '[query]': {
          required: true,
          description: 'query.'
        }
      },
      aliases: [ 'se deezer' ],
      description: 'search on deezer.'
    },
    'search soundcloud': {
      arguments: {
        '[query]': {
          required: true,
          description: 'query.'
        }
      },
      aliases: [ 'se soundcloud' ],
      description: 'search on soundcloud.'
    },
    'search youtube': {
      arguments: {
        '[query]': {
          required: true,
          description: 'query.'
        }
      },
      aliases: [ 'se youtube' ],
      description: 'search on youtube.'
    },
  }
};

export default Search;