/*
Scenario:
create an images object that will be used to store the images. the object should have a list
property, which will be an array of image objects and methods:

    - contains: which takes as its argument the title of the image and returns true if the image
      is already placed in the list (otherwise it returns false)
    
    - add: which takes three arguments (title, artist, and date) and creates a new object based
      on them and addds it to the list (if it has not already been added)
    
    - show: which displays all images in the list

    - clear: which removes all objects from the list

while creating an object, use the Image constructor prepared in the earlier task.

test the script by calling the sequence:
*/
let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let images = {
    list: [],
    contains(title) {
        let result = false;
        this.list.forEach(image => {
            if (image.title === title) result = true;
        })
        return result;
    },
    add(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },
    show() {
        if (!this.list.length) {
            console.log("nothing to show");
            return
        }
        this.list.forEach(image => {
            console.log(`${image.title} (${image.artist}, ${image.date})`);
        })
    },
    clear() {
        this.list.length ? this.list.length = 0 : console.log("nothing to clear");
    }
};

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1503)
// -> Last Supper (Leonardo da Vinci, 1495)
// -> The Starry Night (Vincent van Gogh, 1889)
images.clear();
images.show();





// sample solution: