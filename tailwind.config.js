tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              primary: "#0d9488",
              mint: {
                50: "#f0fdf4",
                100: "#dcfce7",
                200: "#bbf7d0",
                500: "#22c55e",
              },
              "background-light": "#f8fafc",
              "background-dark": "#0f172a",
            },
            fontFamily: {
              display: ["Inter", "sans-serif"],
            },
            borderRadius: {
              DEFAULT: "0.375rem",
              lg: "0.75rem",
              xl: "1rem",
              full: "9999px",
            },
          },
        },
      };