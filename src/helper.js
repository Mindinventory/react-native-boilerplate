const kleur = require("kleur");
var figlet = require("figlet");
const { red, green, yellow } = kleur;

function logError(message) {
  console.error(red().bold(`[ERROR] ${message}`));
  process.exit(1); // Exit the process after logging error
}
function logWarning(message) {
  console.warn(yellow().bold(`[WARNING] ${message}`));
}
function logSuccess(message) {
  console.log(green().bold(`[SUCCESS] ${message}`));
}

function logger(message) {
  console.log(`${message}`);
}

async function loading(text) {
  const ora = (await import("ora")).default;
  return ora(`${text}`);
}

async function textBanners() {
  const chalk = (await import("chalk")).default;
  return figlet.text(
    "MINDINVENTORY",
    {
      font: "Big Money-nw",
      horizontalLayout: "full",
      verticalLayout: "default",
      whitespaceBreak: true,
      width: 200,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(chalk.hex("#ED184F")(data));
    }
  );
}

async function boilerplateBanner() {
  const chalk = (await import("chalk")).default;
  return figlet.text(
    "BOILERPLATE",
    {
      font: "Big Money-nw",
      horizontalLayout: "full",
      verticalLayout: "default",
      whitespaceBreak: true,
      width: 200,
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(chalk.hex("#FFFFFF")(data));
    }
  );
}
module.exports = {
  logError,
  logWarning,
  logSuccess,
  loading,
  textBanners,
  logger,
  boilerplateBanner,
};
