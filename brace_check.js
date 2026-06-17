const fs = require('fs');

const css = fs.readFileSync('style.css', 'utf8');
let open = 0;
let lines = css.split('\n');
for (let i = 0; i < lines.length; i++) {
    for (let j = 0; j < lines[i].length; j++) {
        if (lines[i][j] === '{') open++;
        if (lines[i][j] === '}') {
            open--;
            if (open < 0) {
                console.log(`Unmatched } at line ${i + 1}`);
                open = 0; // reset to continue finding
            }
        }
    }
}
console.log(`Final open braces: ${open}`);
