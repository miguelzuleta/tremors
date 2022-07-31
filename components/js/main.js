import append from './append.js';

let vids = 25;
let vidObj = [];

for (let i = 1; i < vids; i++) {
    let name = i.toString().padStart(3, 0);

    vidObj.push({
        elem: 'video',
        attrs: {
            src: `../assets/vid-${name}.mov`,
            controls: ''
        }
    })
}

append({
    parent: 'section',
    child: vidObj
})