# Example Module Package for Somiibo
An example showing how you can create a custom library for your own modules for Somiibo and share them with the world

## File Structure
```
root/
  ├── assets/
  │   ├── ... # any assets you need can go here, such as .css files or .js modules
  ├── injectors/
  │   ├── <injector-name>.js # any injectors you want to include can go here
  ├── modules/
  │   ├── <module-name>/
  │   │   ├── instructions.html # instructions for the end user displayed before the module begins
  │   │   ├── interface.html # if the module does not navigate web pages you can alternatively display an interface for the user
  │   │   ├── main.js # instructions for the end user displayed before the module begins
  │   │   ├── settings.html # settings for the module
  │   ├── ...
  ├── main.json
```
