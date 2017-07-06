const { BabelPlugin, FuseBox } = require("fuse-box");

const fuse = FuseBox.init({
  homeDir: "src/",
  output: "out/$name.js",
  plugins: [
    BabelPlugin({
      config: {
        sourceMaps: true,
        presets: ["es2015"],
        plugins: [
            ["transform-react-jsx"],
        ],
      },
    })
  ]
});

const babelOnly = fuse.bundle("babelOnly").target("electron").instructions(`> [index.jsx]`);

fuse.run();