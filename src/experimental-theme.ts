interface ThemeConfig {
  palette: {
    primary: {
      darkest: string;
      dark: string;
      main: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    secondary: {
      darkest: string;
      dark: string;
      main: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    success: {
      darkest: string;
      dark: string;
      main: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    error: {
      darkest: string;
      dark: string;
      main: string;
      light: string;
      lighter: string;
      lightest: string;
    };
    text: {
      main: string;
      light: string;
    };
  };
}

const config: ThemeConfig = {
  palette: {
    primary: {
      darkest: "#202375",
      dark: "#3e348c",
      main: "#6b5aa9",
      light: "#8476b8",
      lighter: "#a79dcc",
      lightest: "#cac4e0"
    },
    secondary: {
      darkest: "#b72a27",
      dark: "#c63333",
      main: "#d33939",
      light: "#ef5a59",
      lighter: "#ee9e9f",
      lightest: "#fecfd5"
    },
    success: {
      darkest: "#202375",
      dark: "#3e348c",
      main: "#6b5aa9",
      light: "#8476b8",
      lighter: "#a79dcc",
      lightest: "#cac4e0"
    },
    error: {
      darkest: "#3d7739",
      dark: "#529a4d",
      main: "#5ba956",
      light: "#71b66f",
      lighter: "#88c287",
      lightest: "#a9d2a9"
    },
    text: {
      main: "#000",
      light: "#e2e2e2"
    }
  }
};

export default config;
