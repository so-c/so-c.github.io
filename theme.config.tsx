import Image from "next/image";
import { useRouter } from 'next/router';
import { useConfig } from 'nextra-theme-docs'

const themeConfig = {
  logo: <span>Mirror House Entrance</span>,

  head: () => {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url = 
      'https://so-c.github.io' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
    
    return <>
      <meta property="of:url" content={url} />
      <meta property="og:title" content={frontMatter.title || 'Mirror House'} />
      <meta property="og:description" content={frontMatter.description || '鏡双司のページです'} />
    </>
    
  },

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
      twitter: {
        handle: '@SO_C',
        site: '@SO_C',
        cardType: 'summary',
      },
    }
  }
};

export default themeConfig;
