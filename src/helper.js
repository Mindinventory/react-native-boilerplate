
import kleur from "kleur"
import ora from 'ora';
import figlet from 'figlet'


const { red, green, yellow } = kleur

export const logError = (message) => {  
  console.error(red().bold(`[ERROR] ${message}`))
  process.exit(1); // Exit the process after logging error
}
export const logWarning = (message) => {  
  console.warn(yellow().bold(`[WARNING] ${message}`))
}
export const logSuccess = (message) => {  
  console.log(green().bold(`[SUCCESS] ${message}`))  
}

export const loading = (text) => {
    return ora(`${text}`)
}

export const textBanners = () => {
  return figlet.text(
    "M I",
    {
      font: "Doh",
      horizontalLayout: "full",
      verticalLayout: "default",
      width: 90,
      whitespaceBreak: true,
    
    },
    function (err, data) {
      if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
      }
      console.log(data);
    }
  );
}