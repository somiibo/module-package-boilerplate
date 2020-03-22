# Module Package Boilerplate for Somiibo
A starting point for creating your own module packages for Somiibo.

## File Structure
```
root/
  ├── <module-name>/
  │   ├── module.js
  │   ├── settings.html
  │   ├── settings.js
  │   ├── settings.json
  ├── ...
  ├── main.json
```

### main.json
This file contains meta data for the package as a whole, as well as the meta data for the individual modules contained in the package.

#### Fields
- **id**: A uuid that uniquely identifies the package. You can generate one here: [https://www.uuidgenerator.net/](https://www.uuidgenerator.net/).
- **title**: The title that is displayed on the module selection screen for this package.
- **description**: The description of the package.
- **author**: Your name.
- **modules**: An array of meta data pertaining to each module in the package.

#### Module Fields
- **id**: A uuid that uniquely identifies the module. You can generate one here: [https://www.uuidgenerator.net/](https://www.uuidgenerator.net/).
- **name**: The inner name of the module. Must match the file name in the root folder for this module.
- **title**: The title of the module displayed to the user.
- **description**: The description of the module displayed to the user.
- **icon**: The icon displayed to the user. You can use any free solid FontAwesome icon: [https://fontawesome.com/icons?d=gallery&s=solid&m=free](https://fontawesome.com/icons?d=gallery&s=solid&m=free)
- **version**: The version of the module. You should update this when you make a change to your module so users are always using your latest version.
- **versionRequired**: The minimum version of Somiibo required to use your package.
- **status**: The status of the module. Can be:
  - `online`: the module is available to users.
  - `development`: the module is not available to users and listed as under maintenance.
  - `offline`: the module is not available to users and listed as offline.
- **url**: The starting page of the module.
- **width**: The width of the module browser window.
- **height**: The height of the module browser window.
- **userAgent**: A custom user agent for the module browser window.


### Module Folder
For each module in your package you need to have a folder for the assets that pertain to that module.

#### Files
- **module.js**: The logic of the module itself. This script will be executed in a Node.js environment.
- **settings.html**: The interface for the settings page. This interface will be displayed in an HTML environment. Scripts are not allowed in this file.
- **settings.js**: The logic of the settings interface. This script will be executed in a Node.js environment.
- **settings.json**: The meta data for the settings fields including defaults, min, max, etc...
