let somiibo;
async function main(mod) {
  somiibo = mod;

  // Build your module logic here

  somiibo.loop(main);
}

module.exports = main;
