const fs = require('fs');

try {
    console.log('React spring scroll view fix...');
    var rootDir = process.cwd();

    var file = `${rootDir}/node_modules/react-native-spring-scrollview/SpringScrollView.js`;
    var data = fs.readFileSync(file, 'utf8');
    var dataFix = 'react-native/Libraries/Components/TextInput/TextInputState';
    var dataFix1 = 'currentlyFocusedInput()';

    if (data.indexOf(dataFix) !== -1 && data.indexOf(dataFix1) !== -1) {
        throw '> Already fixed';
    }

    var result = data
        .replace(/react-native\/lib\/TextInputState/g, dataFix)
        .replace(/currentlyFocusedField/g, 'currentlyFocusedInput');
    fs.writeFileSync(file, result, 'utf8');
    console.log('> Done');
} catch (error) {
    console.error(error);
}
