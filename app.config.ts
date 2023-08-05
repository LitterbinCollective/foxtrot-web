export default defineAppConfig({
  docus: {
    title: 'foxtrot',
    description: 'free and open source discord media bot',
    image: 'https://foxtrot.litterbin.dev/abstract.png',
    socials: {
      github: 'LitterbinCollective/foxtrot.ts'
    },
    aside: {
      level: 1,
      exclude: []
    },
    header: {
      logo: 'logo',
      exclude: []
    },
    footer: {
      iconLinks: [
        {
          href: '/invite',
          icon: 'simple-icons:discord'
        }
      ]
    }
  }
});