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
      titleTemplate: '%s – Mirror House Annex'
    }
  }
};

export default themeConfig;
