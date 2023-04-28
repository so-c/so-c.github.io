import Image from "next/image";

const themeConfig = {
  logo: <span>Mirror House Entrance</span>,
  project: {
    link: "https://twitter.com/SO_C",
    icon: (
      <Image
        src="/images/soshi-hood.png"
        width={36}
        height={36}
        alt="twitter"
      />
    ),
  },

  feedback: {
    content: () => {
      return null;
    },
  },

  editLink: {
    component: () => {
      return <></>;
    },
  },

  footer: {
    text: <span>{new Date().getFullYear()} © Soshi Kagami</span>,
  },

  useNextSeoProps() {
    return {
      titleTemplate: '%s – Mirror House Entrance',
      description: '鏡双司 @SO_C のランディングページ',
      openGraph: {
        type: 'website',
        locale: 'ja_JP',
        url: 'https://so-c.github.io/',
        siteName: 'Mirror House Entrance',
        title: '%s',
        description: '鏡双司 @SO_C のランディングページ'
      },
      twitter: {
        handle: '@SO_C',
        site: '@SO_C',
        cardType: 'summary',
      },
    }
  }
};

export default themeConfig;
